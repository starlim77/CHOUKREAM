package lookbook.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lookbook.bean.StyleDTO;
import lookbook.dao.StyleDAO;

@Service
public class StyleServiceImpl implements StyleService {
	@Autowired
	private StyleDAO styleDAO;

	
	@Override
	public void upload(StyleDTO styleDTO)  {
		styleDAO.save(styleDTO);	
	}

	@Override
	public List<StyleDTO> getMyStyleBoardList() {
		return styleDAO.findAll();
	}
	
	@Override
	public List<StyleDTO> getStyleBoardList() {
		return styleDAO.findAll();
	}

}

