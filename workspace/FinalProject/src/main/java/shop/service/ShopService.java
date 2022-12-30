package shop.service;

import java.util.List;

import shop.bean.ShopDTO;

public interface ShopService {

	List<ShopDTO> getProductList();

	List<ShopDTO> sortGetProductList();

}
