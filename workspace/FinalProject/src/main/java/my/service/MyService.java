package my.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import my.bean.AddressDTO;
import my.bean.PointDTO;
import pay.bean.CompletePaymentDTO;
import shop.bean.CompletedOrderDTO;
import shop.bean.ProductDTO;

public interface MyService {
	
	public void addAddress(AddressDTO addressDTO);
	
	public List<AddressDTO> getAllAddress(String id);
	
	public Optional<PointDTO> getHavePoint(String id);
	
	public void changePoint(PointDTO pointDTO);
	
	public Optional<AddressDTO> getDefaultAddress(String id);

	public List<AddressDTO> deleteAddress(String id, long seq);

	public Optional<AddressDTO> getAddressBySeq(long seq);

	public AddressDTO addressUpdate(AddressDTO addressDTO);

	public List<ProductDTO> getBought(long memberSeq);

	public List<ProductDTO> getBuying(long memberSeq);

	public List<ProductDTO> getSelling(long memberSeq);

	public List<ProductDTO> getSold(long memberSeq);

}
