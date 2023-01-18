package my.controller;

import static org.hamcrest.CoreMatchers.nullValue;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import member.dao.MemberDAO;
import my.bean.AddressDTO;
import my.bean.GradeDTO;
import my.bean.PointDTO;
import my.bean.SellBuyHistory;
import my.service.MyService;
import pay.bean.CompletePaymentDTO;
import shop.bean.ProductDTO;
import shop.service.ShopServiceImpl;

@RestController
@CrossOrigin
@RequestMapping(value = "my")
public class MyController {

	@Autowired
	private MyService myService;
	@Autowired
	private ShopServiceImpl shopServiceImpl;
	@Autowired
	private MemberDAO memberDAO;
	
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
	
	@DeleteMapping(path = "deleteAddress")
	public List<AddressDTO> deleteAddress(@RequestParam String id, long seq) {
		return myService.deleteAddress(id ,seq);
	}
	
	@GetMapping(path = "getAddressBySeq")
	public Optional<AddressDTO> getAddressBySeq(@RequestParam long seq){
		return myService.getAddressBySeq(seq);
	}
	@RequestMapping(path = "addressUpdate")
	public AddressDTO addressUpdate(@ModelAttribute AddressDTO addressDTO){
		return myService.addressUpdate(addressDTO);
	}
	@GetMapping(path = "getBoughtHistory")
	public List<SellBuyHistory> getBoughtHistorie(@RequestParam long memberSeq) {
		return myService.getBoughtHistorie(memberSeq);
	}
	@GetMapping(path = "getBuyingHistory")
	public List<SellBuyHistory> getBuyingHistory(@RequestParam long memberSeq) {
		return myService.getBuyingHistory(memberSeq);
	}
	@GetMapping(path = "getSoldHistory")
	public List<SellBuyHistory> getSoldHistory(@RequestParam long memberSeq) {
		return myService.getSoldHistory(memberSeq);
	}
	@GetMapping(path = "getSellingHistory")
	public List<SellBuyHistory> getSellingHistory(@RequestParam long memberSeq) {
		return myService.getSellingHistory(memberSeq);
	}
	@GetMapping(path = "getSellingUsed")
	public List<SellBuyHistory> getSellingUsed(@RequestParam long memberSeq) {
		return myService.getSellingUsed(memberSeq);
	}
	@GetMapping(path = "getSoldUsed")
	public List<SellBuyHistory> getSoldUsed(@RequestParam long memberSeq) {
		return myService.getSoldUsed(memberSeq);
	}
	@GetMapping(path = "getBuyingUsed")
	public List<SellBuyHistory> getBuyingUsed(@RequestParam long memberSeq) {
		return myService.getBuyingUsed(memberSeq);
	}
	@GetMapping(path = "getBoughtUsed")
	public List<SellBuyHistory> getBoughtUsed(@RequestParam long memberSeq) {
		return myService.getBoughtUsed(memberSeq);
	}
	@GetMapping(path = "getSellRecent")
	public List<SellBuyHistory> getSellRecent(@RequestParam long memberSeq) {
		return myService.getSellRecent(memberSeq);
	}
	@GetMapping(path = "getBuyRecent")
	public List<SellBuyHistory> getBuyRecent(@RequestParam long memberSeq) {
		return myService.getBuyRecent(memberSeq);
	}
	@GetMapping(path = "getGrade")
	public Optional<GradeDTO> getGrade(@RequestParam long memberSeq) {
		String id = memberDAO.findById(memberSeq).get().getEmail();
		return myService.getGrade(id);
	}
	
	
}
