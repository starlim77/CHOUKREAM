package pay.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pay.service.PayService;

@RestController
@CrossOrigin
@RequestMapping(value = "pay")
public class PayController {
	
	@Autowired
	private PayService payService;
	
	@RequestMapping(path = "getOrderNumber")
	public int getOrderNumber() {
		return payService.getOrderNumber();
	}
	
}
