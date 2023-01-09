package shop.service;

import java.util.List;
import java.util.Optional;

import shop.bean.NewProductDTO;
import shop.bean.ProductDTO;

public interface ShopService {

	public List<ProductDTO> getProductList();

	public List<ProductDTO> sortGetProductList();

	public Optional<ProductDTO> getProductBySeq(int seq);
	
	public List<ProductDTO> getShoesList(String shoes);

}
