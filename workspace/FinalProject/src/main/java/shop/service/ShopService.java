package shop.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import shop.bean.NewProductDTO;
import shop.bean.ProductDTO;
import shop.bean.ProductSizeDTO;
import shop.bean.SortListDTO;

public interface ShopService {

	public List<ProductDTO> getProductList();

	public List<ProductDTO> sortGetProductList();

	public Optional<ProductDTO> getProductBySeq(int seq);
	
	public List<ProductDTO> getShoesList(String shoes);

	public void delete(int seq);
	List<ProductSizeDTO> findBySeq(int seq);

	public List<SortListDTO> favourSort();

	public void resellDelete(int seq);

	public List<ProductDTO> resellSearch(Map<String, String> map);

	public void resellUpload(ProductDTO productDTO);

	public List<ProductDTO> BuySort();

	public List<ProductDTO> SellSort();


	
}
