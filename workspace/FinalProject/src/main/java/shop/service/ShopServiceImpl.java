package shop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import shop.dao.ShopDAO;
import shop.bean.ProductDTO;

@Service
public class ShopServiceImpl implements ShopService {
	
	@Autowired
	private ShopDAO shopDAO;
	
	@Override
	public List<ProductDTO> getProductList() {
		return shopDAO.findAll();
	}

	@Override
	public List<ProductDTO> sortGetProductList() {
		return shopDAO.findAll(Sort.by(Direction.DESC, "releaseDate"));
	}

	@Override
	public Optional<ProductDTO> getProductBySeq(int seq) {
		return shopDAO.findById(seq);
	}

	@Override
	public List<ProductDTO> getShoesList(String shoes) {
		return shopDAO.findProductDTOsByCategory(shoes);
	}

	
}


