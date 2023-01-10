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
		List<AddressDTO> list = addressDAO.findAddressDTOsByIdOrderByDefaultAddressDesc(addressDTO.getId());
//		System.out.println("list = "+list);
		if(list.size() == 0) {
			addressDTO.setDefaultAddress(1);
			addressDAO.save(addressDTO);
		}else if(addressDTO.getDefaultAddress()==1) {
			list.get(0).setDefaultAddress(0);
			addressDAO.save(list.get(0));
			addressDAO.save(addressDTO);
		}else {
			addressDAO.save(addressDTO);
		}
	}
	@Override
	public List<AddressDTO> getAllAddress(@RequestParam String id) {
		return addressDAO.findAddressDTOsByIdOrderByDefaultAddressDesc(id);
	}
	@Override
	public Optional<AddressDTO> getDefaultAddress(String id) {
		return addressDAO.findByIdAndDefaultAddress(id, 1);
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
