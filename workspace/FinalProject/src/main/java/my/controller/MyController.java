package my.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import my.bean.AddressDTO;
import my.bean.PointDTO;
import my.service.MyService;

@RestController
@CrossOrigin
@RequestMapping(value = "my")
public class MyController {

	@Autowired
	private MyService myService;
	
	@RequestMapping(path =  "addAddress")
	public void addAddress(@ModelAttribute AddressDTO addressDTO) {
		//System.out.println(addressDTO);
		myService.addAddress(addressDTO);
	}

	@RequestMapping(path = "getAllAddress")
	public List<AddressDTO> getAllAddress(@RequestParam String id){
		return myService.getAllAddress(id);
	}
	
	@RequestMapping(path = "getDefaultAddress")
	public Optional<AddressDTO> getDefaultAddress(@RequestParam String id){
		return myService.getDefaultAddress(id);
	}
	
	@RequestMapping(path = "getHavePoint")
	public int getHavePoint(@RequestParam String id) {
		
		Optional<PointDTO> pointDTO = myService.getHavePoint(id);
		System.out.println(pointDTO);
		if(pointDTO.isPresent()){
			return pointDTO.get().getPoint();
		}else {
			return 0;
		}
	}
	
	@RequestMapping(path = "changePoint")
	public void changePoint(@ModelAttribute PointDTO pointDTO) {
		myService.changePoint(pointDTO);
	}
	
	
	
	
}
