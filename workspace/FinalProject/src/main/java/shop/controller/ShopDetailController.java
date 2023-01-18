package shop.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lookbook.bean.StyleDTO;
import shop.bean.BidsListDTO;
import shop.bean.BrandListDTO;
import shop.bean.CompletedOrderDTO;
import shop.bean.NewBrandListDTO;
import shop.bean.NewProductDTO;
import shop.bean.NewProductOptionDTO;
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
	
	@GetMapping(path="getBrandStyleList")
	public List<StyleDTO> getBrandStyleList(@RequestParam int seq) {
		System.out.println(shopDetailService.getBrandStyleList(seq));
		return shopDetailService.getBrandStyleList(seq);  
	}
	
	
	@GetMapping(path="getNewProductOption")
	public List<NewProductOptionDTO> getNewProductOption(@RequestParam int seq) {
		return shopDetailService.getNewProductOption(seq);
	}
	
	@GetMapping(path="addNewProductOption")
	public void addNewProductOption(@RequestParam int seq, @RequestParam String option) {
		shopDetailService.addNewProductOption(seq, option);
	}
	
	@GetMapping(path="updateInventory")
	public void updateInventory(@RequestParam int seq, @RequestParam String option, @RequestParam int inventory) {
		shopDetailService.updateInventory(seq, option, inventory);
	}
	
	@GetMapping(path="deleteNewProductOption")
	public void deleteNewProductOption(@RequestParam int seq, @RequestParam String option) {
		shopDetailService.deleteNewProductOption(seq, option);
	}
	
	@GetMapping(path="getProductSizeTable")
	public List<ProductSizeDTO> getProductSizeTable(@RequestParam int seq) {
		return shopDetailService.getProductSizeTable(seq);
	}
	
	@GetMapping(path="addResllProductOption")
	public void addResllProductOption(@RequestParam int seq, @RequestParam String option) {
		shopDetailService.addResllProductOption(seq, option);
	}
	
	@GetMapping(path="deleteResllProductOption")
	public void deleteResllProductOption(@RequestParam int seq, @RequestParam String option) {
		shopDetailService.deleteResllProductOption(seq, option);
	}
	
	@GetMapping(path="getNewBrandList")
	public List<NewBrandListDTO> getNewBrandList(@RequestParam int seq,@RequestParam String brand) {
		return shopDetailService.getNewBrandList(seq, brand);  
	}
	
}
