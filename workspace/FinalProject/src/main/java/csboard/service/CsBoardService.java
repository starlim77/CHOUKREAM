package csboard.service;

import java.util.List;
import java.util.Optional;

import csboard.bean.CsBoardDTO;


public interface CsBoardService {
	public void write(CsBoardDTO csBoardDTO);

	public List<CsBoardDTO> getList();

	public List<CsBoardDTO>getCategory(String category);

	public List<CsBoardDTO> getKeywordSearch(String keyword);

	
}
