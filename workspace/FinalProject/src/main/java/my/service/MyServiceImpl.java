package my.service;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.jaxb.SpringDataJaxb.OrderDto;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import member.dao.MemberDAO;
import my.bean.AddressDTO;
import my.bean.PointDTO;
import my.bean.SellBuyHistory;
import my.dao.AddressDAO;
import my.dao.PointDAO;
import pay.bean.CompletePaymentDTO;
import pay.dao.PayDAO;
import shop.bean.CompletedOrderDTO;
import shop.bean.OrderDTO;
import shop.bean.ProductDTO;
import shop.dao.CompletedOrderRepository;
import shop.dao.OrderRepository;
import shop.dao.ShopDAO;
import shop.service.ShopServiceImpl;

@Service
public class MyServiceImpl implements MyService{

	@Autowired
	private AddressDAO addressDAO;
	@Autowired
	private PointDAO pointDAO;
	@Autowired
	private MemberDAO memberDAO;
	@Autowired
	private ShopDAO shopDAO;
	
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
	@Override
	public List<AddressDTO> deleteAddress(String id, long seq) {
		addressDAO.deleteByIdAndSeq(id, seq);
		
		return addressDAO.findAddressDTOsByIdOrderByDefaultAddressDesc(id);
	}
	@Override
	public Optional<AddressDTO> getAddressBySeq(long seq) {
		return addressDAO.findById(seq);
	}
	
	//주소 업데이트
	@Override
	public AddressDTO addressUpdate(AddressDTO addressDTO) {
		AddressDTO oldAddressDTO = new AddressDTO();
		
		oldAddressDTO = addressDAO.findById(addressDTO.getSeq()).get();
		oldAddressDTO.setAddr1(addressDTO.getAddr1());
		oldAddressDTO.setAddr2(addressDTO.getAddr2());
		oldAddressDTO.setDefaultAddress(addressDTO.getDefaultAddress());
		oldAddressDTO.setName(addressDTO.getName());
		oldAddressDTO.setPhone(addressDTO.getPhone());
		oldAddressDTO.setZipcode(addressDTO.getZipcode());
		
		return addressDAO.save(oldAddressDTO);
	}
	@Override
	public List<SellBuyHistory> getBoughtHistorie(long memberSeq) {
		String email = memberDAO.findById(memberSeq).get().getEmail();
		
		return shopDAO.getBoughtHistorie(email);
	}
	@Override
	public List<SellBuyHistory> getBuyingHistory(long memberSeq) {
		String email = memberDAO.findById(memberSeq).get().getEmail();
		
		return shopDAO.getBuyingHistory(email);
	}
	@Override
	public List<SellBuyHistory> getSoldHistory(long memberSeq) {
		String email = memberDAO.findById(memberSeq).get().getEmail();
		
		return shopDAO.getSoldHistory(email);
	}
	@Override
	public List<SellBuyHistory> getSellingHistory(long memberSeq) {
		String email = memberDAO.findById(memberSeq).get().getEmail();
		return shopDAO.getSellingHistory(email);
	}
	@Override
	public List<SellBuyHistory> getSellingUsed(long memberSeq) {
		String email = memberDAO.findById(memberSeq).get().getEmail();
		return shopDAO.getSellingUsed(email);
	}
	@Override
	public List<SellBuyHistory> getSoldUsed(long memberSeq) {
		String email = memberDAO.findById(memberSeq).get().getEmail();
		
		return shopDAO.getSoldUsed(email);
	}
	@Override
	public List<SellBuyHistory> getBuyingUsed(long memberSeq) {
		String email = memberDAO.findById(memberSeq).get().getEmail();
		return shopDAO.getBuyingUsed(email);
	}
	@Override
	public List<SellBuyHistory> getBoughtUsed(long memberSeq) {
		String email = memberDAO.findById(memberSeq).get().getEmail();
		
		return shopDAO.getBoughtUsed(email);
	}
	
}
