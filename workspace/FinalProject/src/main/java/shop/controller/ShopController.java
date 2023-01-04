package shop.controller;

import java.util.List;
import java.util.Optional;

import org.aspectj.weaver.patterns.IScope;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import shop.bean.ProductDTO;
import shop.service.ShopDetailService;
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
		return shopService.sortGetProductList();
	}
	
	@PostMapping("getProductBySeq")
	public Optional<ProductDTO> getProductBySeq(@RequestParam int seq) {
		
		return shopService.getProductBySeq(seq);
	}
	
	@GetMapping("getShoesList")
	public List<ProductDTO> getShoesList(@RequestParam String shoes)  {
		System.out.println("슈즈 " + shoes);
		return shopService.getShoesList(shoes);
		
	}
}
