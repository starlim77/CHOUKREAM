package pay.controller;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import pay.service.PayService;
import sms.service.SmsService;
import shop.bean.BidsListDTO;

@RestController
@CrossOrigin
@RequestMapping(value = "pay")
public class PayController {
	
	@Autowired
	private PayService payService;
	@Autowired
	private SmsService smsService;
	
	@RequestMapping(path = "getOrderNumber")
	public int getOrderNumber() {
		return payService.getOrderNumber();
	}
	
	@RequestMapping(path = "completePay") 
	public void completePay() {
		
		
		//smsService.sendSms("01073971787", "content test 중입니다.");
	}
	@GetMapping(path = "getSellBidsPriceMin")
	public Optional<BidsListDTO> getSellBidsPriceMin(String size, int seq){
		return payService.getSellBidsPriceMin(size, seq);
	}
	
	@GetMapping(path = "getBuyBidsPriceMax")
	public Optional<BidsListDTO> getBuyBidsPriceMax(String size, int seq){
		return payService.getBuyBidsPriceMax(size, seq);
	}
	
	
}
