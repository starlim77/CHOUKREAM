package shop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import shop.bean.ProductDTO;
import shop.service.ShopService;

@CrossOrigin
@RestController
@RequestMapping("shop")
public class ShopController {
	@Autowired
	private ShopService shopService;
	
	@GetMapping("getProductList")
	public List<ProductDTO> getProductList() {
		
		System.out.println("ㅎㅇㅎㅇ " + shopService.getProductList());
		return shopService.getProductList();
	}
	
	@GetMapping("sortGetProductList")
	public List<ProductDTO> sortGetProductList() {
		
		System.out.println("sort 됨 " + shopService.sortGetProductList());
		return shopService.sortGetProductList();
	}
	
}
