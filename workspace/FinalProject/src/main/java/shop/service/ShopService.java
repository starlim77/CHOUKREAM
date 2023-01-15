package shop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.jaxb.SpringDataJaxb.OrderDto;

import shop.bean.NewProductDTO;
import shop.bean.ProductDTO;
import shop.bean.ProductSizeDTO;

public interface ShopService {

	public List<ProductDTO> getProductList();

	public List<ProductDTO> sortGetProductList();

	public Optional<ProductDTO> getProductBySeq(int seq);
	
	public List<ProductDTO> getShoesList(String shoes);

	public void delete(int seq);
	List<ProductSizeDTO> findBySeq(int seq);

	
}
