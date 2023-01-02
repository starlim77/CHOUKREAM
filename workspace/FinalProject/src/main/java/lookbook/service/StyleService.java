package lookbook.service;

import java.util.List;
import lookbook.bean.StyleDTO;

public interface StyleService {

	public void upload(StyleDTO styleDTO);

	public List<StyleDTO> getMyStyleBoardList();
	
	public List<StyleDTO> getStyleBoardList();
		
}
