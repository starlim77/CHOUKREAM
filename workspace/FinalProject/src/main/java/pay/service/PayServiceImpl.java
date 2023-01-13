package pay.service;


import static org.hamcrest.CoreMatchers.nullValue;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import my.bean.GradeDTO;
import my.bean.PointDTO;
import my.dao.PointDAO;
import my.service.MyService;
import pay.bean.CompletePaymentDTO;
import pay.dao.PayDAO;
import shop.bean.BidsListDTO;
import shop.bean.OrderDTO;
import shop.dao.OrderRepository;

@Service
public class PayServiceImpl implements PayService {

	@Autowired
	private PayDAO payDAO;
	@Autowired
	private MyService myService;
	@Autowired
	private OrderRepository orderRepository;
	
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
		
		if(type == "resell") {
			//ordertable 삭제
			
			
			//completeordertable 생성
			
			
		}
		else if(type == "new") {
			
		}
		else if(type == "used") {
			
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
		int accuralPoint = (int) Math.ceil(completePaymentDTO.getProductPrice()*accrualRate);
		
		
		Optional<PointDTO> havePoint = myService.getHavePoint(id);
		int usePoint = completePaymentDTO.getUsePoint();
		int newPoint = (int) (havePoint.get().getPoint() - usePoint + accuralPoint);
		
//		포인트 적립
		PointDTO pointDTO = new PointDTO();
		pointDTO.setId(id);
		pointDTO.setPoint(newPoint);
		myService.changePoint(pointDTO);
		
		
		//문자 전송
		
		
		//구매 이력 저장
		
		
		
		
		
	}

	@Override
	public Optional<OrderDTO> getOrderTableBySeq(int seq) {
		return orderRepository.findById(seq);
	}

	
}
