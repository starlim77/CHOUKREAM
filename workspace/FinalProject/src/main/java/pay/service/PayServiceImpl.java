package pay.service;


import static org.hamcrest.CoreMatchers.nullValue;

import java.text.DecimalFormat;
import java.util.Date;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import ch.qos.logback.core.joran.spi.ElementSelector;
import member.bean.MemberDto;
import member.dao.MemberDAO;
import my.bean.GradeDTO;
import my.bean.PointDTO;
import my.dao.GradeDAO;
import my.dao.PointDAO;
import my.service.MyService;
import pay.bean.CompletePaymentDTO;
import pay.dao.PayDAO;
import shop.bean.BidsListDTO;
import shop.bean.CompletedOrderDTO;
import shop.bean.OrderDTO;
import shop.bean.ProductDTO;
import shop.dao.OrderRepository;
import shop.dao.ShopDAO;
import sms.service.SmsService;

@Service
public class PayServiceImpl implements PayService {

	@Autowired
	private PayDAO<?> payDAO;
	@Autowired
	private MyService myService;
	@Autowired
	private OrderRepository orderRepository;
	@Autowired
	private SmsService smsService;
	@Autowired
	private MemberDAO memberDAO;
	@Autowired
	private ShopDAO shopDAO;
	@Autowired
	private GradeDAO gradeDAO;
	
	@Override
	public int getOrderNumber() {
		return payDAO.getOrderNumber();
	}

	@Override
	public Optional<BidsListDTO> getSellBidsPriceMin(String size, int seq) {
		return payDAO.getSellBidsPriceMin(size, seq);
	}

	@Override
	public Optional<BidsListDTO> getBuyBidsPriceMax(String size, int seq) {
		return payDAO.getBuyBidsPriceMax(size, seq);
	}

	@Override
	public void completePay(CompletePaymentDTO completePaymentDTO) {
		
		String type = completePaymentDTO.getType();
		String id = completePaymentDTO.getId();
		
		int productNum = 0;
		String productName = null;
		
		if(type.equals("resell")) {
			
			//상품번호로 상품명 가져오기
			productNum = completePaymentDTO.getProductNum();
			Optional<ProductDTO> productDTO = shopDAO.findById(productNum);
			productName = productDTO.get().getTitle();
			
			
			//ordertable 삭제 전 데이터 꺼내오기
			int orderNum = completePaymentDTO.getOrderTableSeq();
			Optional<OrderDTO> orderDTO = orderRepository.findById(orderNum);
			
			//completeordertable 생성
			
			CompletedOrderDTO completedOrderDTO = new CompletedOrderDTO();
			completedOrderDTO.setSeq(productNum);
			completedOrderDTO.setOrderSeq(completePaymentDTO.getOrderTableSeq());
			completedOrderDTO.setSize(completePaymentDTO.getSize());
			completedOrderDTO.setPrice(completePaymentDTO.getProductPrice());	
			completedOrderDTO.setSellOrderUser(orderDTO.get().getSellOrderUser());
			completedOrderDTO.setBuyOrderUser(completePaymentDTO.getId());
			completedOrderDTO.setTradeDate(new Date());
			
//			BeanUtils.copyProperties(orderDTO, completedOrderDTO);
//			BeanUtils.copyProperties(completePaymentDTO, completedOrderDTO);
			
			System.out.println("completedOrderDTO 출력 테스트 중");
			System.out.println(completedOrderDTO);
			
			//ordertable 삭제
			
		}
		else if(type.equals("new")) {
			
		}
		else if(type.equals("used")) {
			
		}
		
		Optional<GradeDTO> gradeDTO = myService.getGrade(id);
		String grade = gradeDTO.get().getGrade();
		
		double accrualRate = 0.05;
		
		if(grade.equals("일반회원")) {}
		else if(grade.equals("우수회원")) {
			accrualRate = 0.07;
		}
		else if(grade.equals("VIP회원")) {
			accrualRate = 0.1;
		}
		// 회원 등급 별 적립 포인트 계산
		int accuralPoint = (int) Math.ceil(completePaymentDTO.getPayPrice()*accrualRate);
		
		
		Optional<PointDTO> havePoint = myService.getHavePoint(id);
		int usePoint = completePaymentDTO.getUsePoint();
		int newPoint = (int) (havePoint.get().getPoint() - usePoint + accuralPoint);
		
//		포인트 적립
		PointDTO pointDTO = new PointDTO();
		pointDTO.setId(id);
		pointDTO.setPoint(newPoint);
		myService.changePoint(pointDTO);
		
		//id 이용해 핸드폰 번호 꺼내오기
		Optional<MemberDto> memberDto = memberDAO.findByEmail(completePaymentDTO.getId());
		String phoneNum = memberDto.get().getPhone();
		
		//상품가격
		int productPrice = completePaymentDTO.getProductPrice();
		
		
		//문자 전송
		DecimalFormat decFormat = new DecimalFormat("###,###");
		
		smsService.sendSms(phoneNum, "[상품 결제 완료]\n"
				+ "상품 명 : "+productName+"\n"
				+ "결제금액 : "+ decFormat.format(productPrice));
		
		//구매 이력 저장
		payDAO.save(completePaymentDTO);
		
		//구매이력 금액 합산액 확인 후 회원 등급 조정
		checkAndChangeGrade(id);
		
	}

	@Override
	public Optional<OrderDTO> getOrderTableBySeq(int seq) {
		return orderRepository.findById(seq);
	}

	@Override
	public void checkAndChangeGrade(String id) {
		int totalPrice = payDAO.getAllPayPrice(id);
		System.out.println(totalPrice);
		
		GradeDTO gradeDTO = new GradeDTO();
		gradeDTO.setId(id);
		
		if(totalPrice>=1000000 && totalPrice<2000000) {
			gradeDTO.setGrade("우수회원");
			gradeDAO.save(gradeDTO);
		}else if(totalPrice>=2000000) {
			gradeDTO.setGrade("VIP회원");
			gradeDAO.save(gradeDTO);
		}else{
			gradeDTO.setGrade("일반회원");
			gradeDAO.save(gradeDTO);
		}
	}

	
	
}
