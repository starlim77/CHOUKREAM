package pay.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pay.service.PayService;
import sms.service.SmsService;

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
}
