package pay.service;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import pay.dao.PayDAO;

@Service
public class PayServiceImpl implements PayService {

	@Autowired
	private PayDAO payDAO;
	
	@Override
	public int getOrderNumber() {
		return payDAO.getOrderNumber();
	}

	
}
