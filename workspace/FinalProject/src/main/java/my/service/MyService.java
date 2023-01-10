package my.service;

import java.util.List;
import java.util.Optional;

import my.bean.AddressDTO;
import my.bean.PointDTO;

public interface MyService {
	
	public void addAddress(AddressDTO addressDTO);
	
	public List<AddressDTO> getAllAddress(String id);
	
	public Optional<PointDTO> getHavePoint(String id);
	
	public void changePoint(PointDTO pointDTO);
	
	public Optional<AddressDTO> getDefaultAddress(String id);
	
}
