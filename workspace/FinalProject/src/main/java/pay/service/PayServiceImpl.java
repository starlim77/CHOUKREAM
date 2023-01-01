package pay.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import lombok.Data;
import my.bean.AddressDTO;
import my.dao.AddressDAO;
import pay.dao.PayDAO;

@Service
public class PayServiceImpl implements PayService {

	@Autowired
	private PayDAO payDAO;
	
	@Override
	public int getOrderNumber() {
		// TODO Auto-generated method stub
		return payDAO.getOrderNumber();
	}

	
	
}
