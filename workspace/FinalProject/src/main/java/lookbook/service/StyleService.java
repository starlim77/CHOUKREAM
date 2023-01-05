package lookbook.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lookbook.bean.StyleDTO;
import lookbook.entity.StyleEntity;

public interface StyleService {

	
	public void save(List<MultipartFile> list,StyleDTO styleDTO);

	public List<StyleDTO> findAllByOrderBySeqDesc();
		
}
