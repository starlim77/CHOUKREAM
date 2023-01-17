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
import shop.bean.UsedItemDTO;
import shop.dao.CompletedOrderRepository;
import shop.dao.OrderRepository;
import shop.dao.ShopDAO;
import shop.service.UsedItemService;
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
	@Autowired
	private CompletedOrderRepository completedOrderRepository;
	@Autowired
	private UsedItemService usedItemService;
	
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
		
		int productNum = completePaymentDTO.getProductNum();
		String productName = null;
		
		if(type.equals("resell")) {
			//상품번호로 상품명 가져오기
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
			completedOrderDTO.setShipName(completePaymentDTO.getShipName());
			completedOrderDTO.setShipPhone(completePaymentDTO.getShipPhone());
			completedOrderDTO.setShipAddress(completePaymentDTO.getShipAddress());
			completedOrderDTO.setAsk(completePaymentDTO.getAsk());
			// 리셀 체결 이력 저장
			completedOrderRepository.save(completedOrderDTO);
			// ordertable 삭제
			orderRepository.deleteById(orderNum);
			
			
//			BeanUtils.copyProperties(orderDTO, completedOrderDTO);
//			BeanUtils.copyProperties(completePaymentDTO, completedOrderDTO);
			
//			System.out.println("completedOrderDTO 출력 테스트 중");
//			System.out.println(completedOrderDTO);
			
		
		}
		else if(type.equals("new")) {
			//상품명 가져오기
			
			// 재고 1개 줄여주기
			
		}
		else if(type.equals("used")) {
			//상품명 가져오기
			Optional<UsedItemDTO> usedItemDTO = usedItemService.viewItem(productNum);
			productName = usedItemDTO.get().getProductName();
			
			// 판매완료 처리
			usedItemService.updateState(productNum, false);
		}
		
		Optional<GradeDTO> gradeDTO = myService.getGrade(id);
		String grade = gradeDTO.get().getGrade();
		
		double accrualRate = 0.01;
		
		if(grade.equals("일반회원")) {}
		else if(grade.equals("우수회원")) {
			accrualRate = 0.02;
		}
		else if(grade.equals("VIP회원")) {
			accrualRate = 0.05;
		}
		// 회원 등급 별 적립 포인트 계산
		int accuralPoint = (int) Math.ceil(completePaymentDTO.getProductPrice()*accrualRate);
		completePaymentDTO.setAccuralPoint(accuralPoint);
		
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
		
		//결제 가격
		int payPrice = completePaymentDTO.getPayPrice();
		
		
		//문자 전송
		DecimalFormat decFormat = new DecimalFormat("###,###");
		
		smsService.sendSms(phoneNum, "[상품 결제 완료]\n"
				+ "상품명 : "+productName+"\n"
				+ "결제금액 : "+ decFormat.format(payPrice));
		
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
	public void cancelPay(String orderNumber) {
		
		Optional<CompletePaymentDTO> completePaymentDTO = payDAO.findByOrderNumber(orderNumber);
		
		String type = completePaymentDTO.get().getType();
			
		int productNum = completePaymentDTO.get().getProductNum();
		String productName = null;
			
		if(type.equals("resell")) {
			//상품번호로 상품명 가져오기
			Optional<ProductDTO> productDTO = shopDAO.findById(productNum);
			productName = productDTO.get().getTitle();
			
			//completedordertable 삭제
			
			//ordertable sell order 행 되돌려 놓기
			
			
		}else if(type.equals("new")) {
			//상품명 가져오기
			
			//상품 재고 +1
			
		}else if(type.equals("used")) {
			//상품명 가져오기
			Optional<UsedItemDTO> usedItemDTO = usedItemService.viewItem(productNum);
			productName = usedItemDTO.get().getProductName();
			
			// 판매중 처리
			usedItemService.updateState(productNum, true);
		}
		//적립포인트
		int accuralPoint = completePaymentDTO.get().getAccuralPoint();
		
		String id = completePaymentDTO.get().getId();
		// 보유포인트
		Optional<PointDTO> havePoint = myService.getHavePoint(id);
		int usePoint = completePaymentDTO.get().getUsePoint();
		int newPoint = (int) (havePoint.get().getPoint() + usePoint - accuralPoint);
		// 포인트 차감 적용
		PointDTO pointDTO = new PointDTO();
		pointDTO.setId(id);
		pointDTO.setPoint(newPoint);
		myService.changePoint(pointDTO);
		
		//id 이용해 핸드폰 번호 꺼내오기
		Optional<MemberDto> memberDto = memberDAO.findByEmail(id);
		String phoneNum = memberDto.get().getPhone();
		
		//결제 가격
		int payPrice = completePaymentDTO.get().getPayPrice();
		
		//문자 전송
		DecimalFormat decFormat = new DecimalFormat("###,###");
		
		smsService.sendSms(phoneNum, "[상품 취소 완료]\n"
				+ "상품명 : "+productName+"\n"
				+ "취소 금액 : "+ decFormat.format(payPrice));
				
		//구매 이력 수정
		payDAO.ChangeStatusColumn(orderNumber);
		
		//구매이력 금액 합산액 확인 후 회원 등급 조정
		checkAndChangeGrade(id);
		
	}
	
	
	@Override
	public void checkAndChangeGrade(String id) {
		int totalPrice = payDAO.getAllPayPrice(id);
		System.out.println(totalPrice);
		
		GradeDTO gradeDTO = new GradeDTO();
		gradeDTO.setId(id);
		
		if(totalPrice>=1000000 && totalPrice<5000000) {
			gradeDTO.setGrade("우수회원");
			gradeDAO.save(gradeDTO);
		}else if(totalPrice>=5000000) {
			gradeDTO.setGrade("VIP회원");
			gradeDAO.save(gradeDTO);
		}else{
			gradeDTO.setGrade("일반회원");
			gradeDAO.save(gradeDTO);
		}
	}
}
