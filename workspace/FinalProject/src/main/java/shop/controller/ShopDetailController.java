package shop.controller;

import static org.hamcrest.CoreMatchers.nullValue;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.jaxb.SpringDataJaxb.OrderDto;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import shop.bean.BidsListDTO;
import shop.bean.BrandListDTO;
import shop.bean.CompletedOrderDTO;
import shop.bean.NewProductDTO;
import shop.bean.OrderDTO;
import shop.bean.ProductDTO;
import shop.bean.ProductSizeDTO;
import shop.bean.SizeMinDTO;
import shop.bean.UsedItemLikeDTO;
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
	
	@GetMapping(path="getCompletedOrderList")
	public List<CompletedOrderDTO> getCompletedOrderList(@RequestParam int seq) {
		return shopDetailService.getCompletedOrderList(seq);
	}
	
	@GetMapping(path="getProductSize")
	public List<SizeMinDTO> getProductSize(@RequestParam int seq) {
		return shopDetailService.getProductSize(seq);
	}
	
	@GetMapping(path="getProductSizeSell")
	public List<SizeMinDTO> getProductSizeSell(@RequestParam int seq) {
		return shopDetailService.getProductSizeSell(seq);
	}
	
	@GetMapping(path="getCompletedOrderListBySize")
	public List<CompletedOrderDTO> getCompletedOrderListBySize(@RequestParam int seq,@RequestParam String size) {
		return shopDetailService.getCompletedOrderListBySize(seq, size);
	}
	
	@GetMapping(path="getSellBidsList")
	public List<BidsListDTO> getSellBidsList(@RequestParam int seq) {
		return shopDetailService.getSellBidsList(seq);  
	}
	
	@GetMapping(path="getSellBidsListBySize")
	public List<BidsListDTO> getSellBidsListBySize(@RequestParam int seq,@RequestParam String size) {
		return shopDetailService.getSellBidsListBySize(seq, size);  
	}
	
	@GetMapping(path="getBuyBidsList")
	public List<BidsListDTO> getBuyBidsList(@RequestParam int seq) {
		return shopDetailService.getBuyBidsList(seq);  
	}
	
	@GetMapping(path="getBuyBidsListBySize")
	public List<BidsListDTO> getBuyBidsListBySize(@RequestParam int seq,@RequestParam String size) {
		return shopDetailService.getBuyBidsListBySize(seq, size);  
	}
	
	@GetMapping(path="getBrandList")
	public List<BrandListDTO> getBrandList(@RequestParam int seq,@RequestParam String brand) {
		return shopDetailService.getBrandList(seq, brand);  
	}
	
	@GetMapping(path="getNewProduct")
	public Optional<NewProductDTO> getNewProduct(@RequestParam int seq) {
		System.out.println(shopDetailService.getNewProduct(seq));
		return shopDetailService.getNewProduct(seq);  
	}
	
	@GetMapping(path="likeCount")
	public Long likeCount(@RequestParam int seq, @RequestParam String shopKind) {
		return shopDetailService.likeCount(seq, shopKind);  
	}
	
	@RequestMapping(path = "addSellOrder")
	public void addSellOrder(@ModelAttribute OrderDTO orderDTO) {
		shopDetailService.addSellOrder(orderDTO);
	}
	
	
	
//	@GetMapping(path="getProductSizeMin")
//	public Optional<Integer> getProductSizeMin(@RequestParam int seq,@RequestParam String size) {
//		System.out.println(shopDetailService.getProductSizeMin(seq, size));
//		return shopDetailService.getProductSizeMin(seq, size);
//	}

}
