package csboard.service;

import java.util.List;
import java.util.Optional;

import csboard.bean.CsBoardDTO;

public interface CsBoardService {
	public void write(CsBoardDTO csBoardDTO);

	public List<CsBoardDTO> getList();

	public List<CsBoardDTO> getCategory(String category);

	public List<CsBoardDTO> getKeywordSearch(String keyword);

	public Optional<CsBoardDTO> getBoard(int seq);

	void delete(int seq);

	public void update(CsBoardDTO csBoardDTO);

	public List<CsBoardDTO> getNotices(String category);

	public Optional<CsBoardDTO> getNotice(int seq);

}
