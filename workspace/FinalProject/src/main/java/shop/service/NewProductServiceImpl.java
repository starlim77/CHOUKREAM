package shop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.bean.NewProductDTO;
import shop.dao.NewProductDAO;

@Service
public class NewProductServiceImpl implements NewProductService {
	@Autowired
	private NewProductDAO newProductDAO;

	@Override
	public void upload(NewProductDTO newProductDTO) {
		System.out.println(newProductDTO);
		newProductDAO.save(newProductDTO);
	}

	@Override
	public List<NewProductDTO> getNewProductList() {
		return newProductDAO.findAll();
	}

	@Override
	public void update(NewProductDTO newProductDTO) {
		System.out.println(newProductDTO);
		
		newProductDAO.save(newProductDTO);
	}

	@Override
	public void delete(int seq) {
		newProductDAO.deleteBySeq(seq);
	}
	
	
}
