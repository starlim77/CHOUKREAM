package pay.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import pay.dao.PayDAO;
import shop.bean.BidsListDTO;

@Service
public class PayServiceImpl implements PayService {

	@Autowired
	private PayDAO payDAO;
	
	@Override
	public int getOrderNumber() {
		return payDAO.getOrderNumber();
	}

	@Override
	public Optional<BidsListDTO> getSellBidsPriceMin(String size, int seq) {
		return payDAO.getSellBidsPriceMin(size, seq);
	}

	@Override
	public Optional<BidsListDTO> getBuyBidsPriceMax(String size, int seq) {
		return payDAO.getBuyBidsPriceMax(size, seq);
	}

	
}
