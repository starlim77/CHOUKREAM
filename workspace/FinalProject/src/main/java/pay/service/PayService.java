package pay.service;

import java.util.Optional;

import pay.bean.CompletePaymentDTO;
import shop.bean.BidsListDTO;
import shop.bean.OrderDTO;

public interface PayService {

	public int getOrderNumber();

	public Optional<BidsListDTO> getSellBidsPriceMin(String size, int seq);

	public Optional<BidsListDTO> getBuyBidsPriceMax(String size, int seq);

	public void completePay(CompletePaymentDTO completePaymentDTO);

	public Optional<OrderDTO> getOrderTableBySeq(int seq);

	public void checkAndChangeGrade(String id);
	
}
