package shop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import shop.dao.ProductSizeRepository;
import shop.dao.ShopDAO;
import shop.bean.NewProductDTO;
import shop.bean.ProductDTO;
import shop.bean.ProductSizeDTO;
import shop.bean.SortListDTO;

@Service
public class ShopServiceImpl implements ShopService {
	
	@Autowired
	private ShopDAO shopDAO;
	@Autowired
	private ProductSizeRepository sizeRepository;
	
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

	@Override
	public void delete(int seq) {
		shopDAO.deleteBySeq(seq);
	}
	public List<ProductSizeDTO> findBySeq(int seq) {
		return sizeRepository.findBySeq(seq);
	}

	@Override
	public List<SortListDTO> sortGetProductList1() {
		
		return shopDAO.sortGetProductList1();
	}


	
}


