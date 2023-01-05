package pay.controller;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import pay.service.PayService;
import shop.bean.BidsListDTO;

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
	
	@GetMapping(path = "getSellBidsPriceMin")
	public Optional<BidsListDTO> getSellBidsPriceMin(String size, int seq){
		return payService.getSellBidsPriceMin(size, seq);
	}
	
	@GetMapping(path = "getBuyBidsPriceMax")
	public Optional<BidsListDTO> getBuyBidsPriceMax(String size, int seq){
		return payService.getBuyBidsPriceMax(size, seq);
	}
	
	
}
