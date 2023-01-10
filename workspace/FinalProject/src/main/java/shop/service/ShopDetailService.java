package shop.service;

import java.util.List;
import java.util.Optional;

import shop.bean.CompletedOrderDTO;
import shop.bean.OrderDTO;
import shop.bean.ProductDTO;
import shop.bean.ProductSizeDTO;

public interface ShopDetailService {
	
	public Optional<ProductDTO> getProduct(int seq);
	
	public List<OrderDTO> getSellOrderList(int seq);
	
	public List<OrderDTO> getBuyOrderList(int seq);

	public List<CompletedOrderDTO> getCompletedOrderList(int seq);

	public List<ProductSizeDTO> getProductSize(int seq);

	public Optional<Integer> getProductSizeMin(int seq, String size);
}
