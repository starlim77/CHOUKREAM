package csboard.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import csboard.bean.CsBoardDTO;
import csboard.dao.CsBoardDAO;
@Service
public class CsBoardServiceImpl implements CsBoardService {
	@Autowired
	private CsBoardDAO csBoardDAO;

	@Override
	public void write(CsBoardDTO csBoardDTO) {
		csBoardDAO.save(csBoardDTO);
		
		
	}

}
