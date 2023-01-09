package shop.service;

import java.util.List;

import shop.bean.NewProductDTO;

public interface NewProductService {
	
	public void upload(NewProductDTO newProductDTO);

	public List<NewProductDTO> getNewProductList();

	public void update(NewProductDTO newProductDTO);

	public void delete(int seq);
}
