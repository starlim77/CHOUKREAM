package my.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import my.bean.AddressDTO;
import my.bean.PointDTO;
import my.dao.AddressDAO;
import my.dao.PointDAO;

@Service
public class MyServiceImpl implements MyService{

	@Autowired
	private AddressDAO addressDAO;
	@Autowired
	private PointDAO pointDAO;
	
	@Override
	public void addAddress(AddressDTO addressDTO) {
		addressDAO.save(addressDTO);
	}
	@Override
	public List<AddressDTO> getAllAddress(@RequestParam String id) {
		return addressDAO.findAddressDTOsById(id);
	}
	@Override
	public Optional<PointDTO> getHavePoint(String id) {
		return pointDAO.findById(id);
	}
	@Override
	public void changePoint(PointDTO pointDTO) {
		pointDAO.save(pointDTO);
	}
	
	
}
