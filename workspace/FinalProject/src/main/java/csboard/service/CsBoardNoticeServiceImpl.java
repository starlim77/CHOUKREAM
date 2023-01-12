package csboard.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import csboard.bean.CsBoarNoticeDTO;
import csboard.bean.CsBoardDTO;
import csboard.dao.CsBoardNoticeDAO;



import org.springframework.stereotype.Service;

@Service
public class CsBoardNoticeServiceImpl implements CsBoardNoticeService {
	@Autowired
	private CsBoardNoticeDAO csBoardNoticeDAO;

	@Override
	public void write(CsBoarNoticeDTO csBoardNoticeDTO) {
		csBoardNoticeDAO.save(csBoardNoticeDTO);
		
	}

	@Override
	public List<CsBoarNoticeDTO> getNotices(String string) {
		
		return csBoardNoticeDAO.findAll();
			
	}

	@Override
	public Optional<CsBoarNoticeDTO> getNotice(int seq) {
		// TODO Auto-generated method stub
		return csBoardNoticeDAO.findById(seq);
	}

}
