package pay.service;

import java.util.Optional;

import shop.bean.BidsListDTO;

public interface PayService {

	public int getOrderNumber();

	public Optional<BidsListDTO> getSellBidsPriceMin(String size, int seq);

	public Optional<BidsListDTO> getBuyBidsPriceMax(String size, int seq);

	
}
