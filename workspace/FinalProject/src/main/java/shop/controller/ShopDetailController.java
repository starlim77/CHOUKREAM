package shop.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import shop.bean.CompletedOrderDTO;
import shop.bean.OrderDTO;
import shop.bean.ProductDTO;
import shop.bean.ProductSizeDTO;
import shop.service.ShopDetailService;

@CrossOrigin
@RestController
public class ShopDetailController {
	@Autowired
	private ShopDetailService shopDetailService;
	
	@GetMapping(path="getProduct")
	public Optional<ProductDTO> getProduct(@RequestParam int seq) {
		return shopDetailService.getProduct(seq);
	}
	
	@GetMapping(path="getSellOrderList")
	public List<OrderDTO> getSellOrderList(@RequestParam int seq) {
		return shopDetailService.getSellOrderList(seq);  
	}
	
	@GetMapping(path="getBuyOrderList")
	public List<OrderDTO> getBuyOrderList(@RequestParam int seq) {
		return shopDetailService.getBuyOrderList(seq);
	}
	
	@GetMapping(path="getCompletedOrderList")
	public List<CompletedOrderDTO> getCompletedOrderList(@RequestParam int seq) {
		return shopDetailService.getCompletedOrderList(seq);
	}
	
	@GetMapping(path="getProductSize")
	public List<ProductSizeDTO> getProductSize(@RequestParam int seq) {
		return shopDetailService.getProductSize(seq);
	}

	@GetMapping(path="getProductSizeMin")
	public Optional<Integer> getProductSizeMin(@RequestParam int seq,@RequestParam String size) {
		System.out.println(shopDetailService.getProductSizeMin(seq, size));
		return shopDetailService.getProductSizeMin(seq, size);
	}
	
	
	
}
