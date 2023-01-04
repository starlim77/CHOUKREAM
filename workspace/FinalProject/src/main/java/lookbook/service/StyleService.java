package lookbook.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lookbook.bean.StyleDTO;
import lookbook.entity.StyleEntity;

public interface StyleService {

	//public void upload(StyleDTO styleDTO);

	//public List<StyleDTO> getMyStyleBoardList(String id);
	public List<StyleDTO> getMyStyleBoardList(); 
	
	public List<StyleDTO> getStyleBoardList();

	public void save(List<MultipartFile> list,StyleDTO styleDTO);

	public List<StyleDTO> findAll();
		
}
