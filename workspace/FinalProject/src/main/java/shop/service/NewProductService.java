package shop.service;

import java.util.List;
import java.util.Map;

import shop.bean.NewProductDTO;

public interface NewProductService {
	
	public void upload(NewProductDTO newProductDTO);

	public List<NewProductDTO> getNewProductList();

	public void update(NewProductDTO newProductDTO);

	public void delete(int seq);

	// public List<NewProductDTO> search(Map<String, String> map);
}
