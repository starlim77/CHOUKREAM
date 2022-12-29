package csboard.service;

import java.util.List;

import csboard.bean.CsBoardDTO;


public interface CsBoardService {
	public void write(CsBoardDTO csBoardDTO);

	public List<CsBoardDTO> getList();
}
