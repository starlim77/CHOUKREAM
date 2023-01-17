package shop.service;

import static org.hamcrest.CoreMatchers.nullValue;

import java.util.List;
import java.util.Map;
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
	public List<SortListDTO> favourSort() {
		return shopDAO.favourSort();
	}

	@Override
	public void resellDelete(int seq) {
		shopDAO.resellDelete(seq);
	}

	@Override
	public List<ProductDTO> resellSearch(Map<String, String> map) {
		String searchOption = map.get("searchOption");
		String keyword = map.get("keyword");
		
		System.out.println("searchOption " + searchOption);
		System.out.println("keyword " + keyword);
		
		if(searchOption.equals("brand"))
			return shopDAO.getSearchBrand(keyword);
		else
			return shopDAO.getSearchCategory(keyword);
		
	}

	@Override
	public void resellUpload(ProductDTO productDTO) {
		//if (shopDAO.findbySeq(productDTO.getSeq()) == null) {
			shopDAO.save(productDTO);
		// }
	}

	@Override
	public List<ProductDTO> getRecentReleaseList(int rn) {
		int start = 0;
		int end = 0;
		if(rn==0) {
			start = 1;
			end = 4;
		}
		else if(rn==1) {
			start = 5;
			end = 8;
		}
		else if(rn==2) {
			start = 9;
			end = 12;
		}
		
		return shopDAO.getRecentReleaseList(start,end);
	}

	

	
	

	
}


