package my.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import my.bean.AddressDTO;
import my.bean.GradeDTO;
import my.bean.PointDTO;
import my.bean.SellBuyHistory;
import pay.bean.CompletePaymentDTO;
import shop.bean.CompletedOrderDTO;
import shop.bean.ProductDTO;

public interface MyService {
	
	public void addAddress(AddressDTO addressDTO);
	
	public List<AddressDTO> getAllAddress(String id);
	
	public Optional<PointDTO> getHavePoint(String id);
	
	public void changePoint(PointDTO pointDTO);
	
	public Optional<AddressDTO> getDefaultAddress(String id);

	public Optional<GradeDTO> getGrade(String id);

	public void saveGradeNewMember(String email);
	
	public List<AddressDTO> deleteAddress(String id, long seq);

	public Optional<AddressDTO> getAddressBySeq(long seq);

	public AddressDTO addressUpdate(AddressDTO addressDTO);

	public List<SellBuyHistory> getBoughtHistorie(long memberSeq);

	public List<SellBuyHistory> getBuyingHistory(long memberSeq);

	public List<SellBuyHistory> getSoldHistory(long memberSeq);

	public List<SellBuyHistory> getSellingHistory(long memberSeq);

	public List<SellBuyHistory> getSellingUsed(long memberSeq);

	public List<SellBuyHistory> getSoldUsed(long memberSeq);

	public List<SellBuyHistory> getBuyingUsed(long memberSeq);

	public List<SellBuyHistory> getBoughtUsed(long memberSeq);

}
