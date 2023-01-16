package lookbook.service;

import java.util.List;
import java.util.Optional;

import org.springframework.web.multipart.MultipartFile;

import lookbook.bean.LikesDTO;
import lookbook.bean.StyleDTO;
import lookbook.bean.StyleLikesDTO;
import shop.bean.ProductDTO;

public interface StyleService {

	//public void upload(StyleDTO styleDTO);

	public List<StyleDTO> findAllMyList(String id);
	//public List<StyleDTO> findAllMyList(); 
	
	public void save(List<MultipartFile> list,StyleDTO styleDTO);
	
	public void save(StyleDTO styleDTO);
	
	public void delete(int seq);

//	public List<StyleDTO> findAllByOrderBySeqDesc();
	public List<StyleDTO> findAll();

	public StyleDTO findMyListDetail(int seq);
	
	public Long findCountById(String id);  //게시글 카운트

	public List<ProductDTO> search(String keyword);

	public Optional<ProductDTO> styleProductSearch(int seq);
	

	
}
