package shop.service;

import java.util.List;

import shop.bean.ProductDTO;

public interface ShopService {

	List<ProductDTO> getProductList();

	List<ProductDTO> sortGetProductList();

}
