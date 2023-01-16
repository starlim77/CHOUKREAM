package my.service;

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
import my.dao.AddressDAO;
import my.dao.PointDAO;
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
	private OrderRepository orderRepository;
	@Autowired
	private ShopServiceImpl shopServiceImpl;
	@Autowired
	private CompletedOrderRepository completedOrderRepository;
	
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
	public List<ProductDTO> getBuy(long id) {
		String email = memberDAO.findById(id).get().getEmail();
		
		List<OrderDTO> buyList = orderRepository.findAllByBuyOrderUser(email);
		
		
		List<ProductDTO> buyItemList = new ArrayList<>();
		for(int i = 0; i < buyList.size(); i++) {
			ProductDTO buyItem = shopServiceImpl.getProductBySeq(buyList.get(i).getSeq()).get();
			buyItemList.add(buyItem);
		}
		
		return buyItemList;
	}
	@Override
	public List<ProductDTO> getDoneBuy(long id) {
		String email = memberDAO.findById(id).get().getEmail();
		
		List<CompletedOrderDTO> boughtList = completedOrderRepository.findSeqByBuyOrderUser(email);
		
		List<ProductDTO> boughtItemList = new ArrayList<>();
		for(int i=0; i < boughtList.size(); i++) {
			ProductDTO boughtItem = shopServiceImpl.getProductBySeq(boughtList.get(i).getSeq()).get();
			boughtItemList.add(boughtItem);
		}
		return boughtItemList;
	}
	@Override
	public List<ProductDTO> getSell(long id) {
		String email = memberDAO.findById(id).get().getEmail();
		
		List<OrderDTO> sellList = orderRepository.findAllBySellOrderUser(email);
		
		List<ProductDTO> sellItemList = new ArrayList<>();
		for(int i = 0; i < sellList.size(); i++) {
			ProductDTO sellItem = shopServiceImpl.getProductBySeq(sellList.get(i).getSeq()).get();
			sellItemList.add(sellItem);
		}

		return sellItemList;
	}
	@Override
	public List<ProductDTO> getSold(long id) {
		String email = memberDAO.findById(id).get().getEmail();
		
		List<OrderDTO> soldList = orderRepository.findAllBySellOrderUser(email);
		
		List<ProductDTO> soldItemList = new ArrayList<>();
		for(int i = 0; i < soldList.size(); i++) {
			ProductDTO soldItem = shopServiceImpl.getProductBySeq(soldList.get(i).getSeq()).get();
			soldItemList.add(soldItem);
		}
		
		return soldItemList;
	}
	@Override
	public Optional<AddressDTO> getAddressBySeq(long seq) {
		return addressDAO.findById(seq);
	}
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

}
