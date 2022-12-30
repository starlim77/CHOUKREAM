package lookbook.service;

import java.util.List;
import lookbook.bean.StyleDTO;

public interface StyleService {

	public void styleBoardWrite(StyleDTO styleDTO);

	public List<StyleDTO> getStyleList();
	
	public void upload(StyleDTO styleDTO);
		
}
