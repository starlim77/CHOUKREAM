package shop.service;

import java.util.List;
import java.util.Optional;

import shop.bean.ProductDTO;
import shop.bean.ProductSizeDTO;

public interface ShopService {

	List<ProductDTO> getProductList();

	List<ProductDTO> sortGetProductList();

	Optional<ProductDTO> getProductBySeq(int seq);

	List<ProductSizeDTO> findBySeq(int seq);
	
}
