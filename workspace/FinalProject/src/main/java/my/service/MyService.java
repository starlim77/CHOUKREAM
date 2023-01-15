package my.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import my.bean.AddressDTO;
import my.bean.PointDTO;
import shop.bean.CompletedOrderDTO;
import shop.bean.ProductDTO;

public interface MyService {
	
	public void addAddress(AddressDTO addressDTO);
	
	public List<AddressDTO> getAllAddress(String id);
	
	public Optional<PointDTO> getHavePoint(String id);
	
	public void changePoint(PointDTO pointDTO);
	
	public Optional<AddressDTO> getDefaultAddress(String id);

	public List<AddressDTO> deleteAddress(String id, long seq);

	public List<ProductDTO> getBuy(long id);

	public List<ProductDTO> getDoneBuy(long id);

}
