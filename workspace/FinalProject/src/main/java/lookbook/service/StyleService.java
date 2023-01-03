package lookbook.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lookbook.bean.StyleDTO;
import lookbook.entity.StyleEntity;

public interface StyleService {

	//public void upload(StyleDTO styleDTO);

	public List<StyleEntity> getMyStyleBoardList();
	
	public List<StyleEntity> getStyleBoardList();

	
	public void save(List<MultipartFile> list,StyleDTO styleDTO);

	public List<StyleDTO> findAll();
		
}
