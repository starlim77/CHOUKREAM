package csboard.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import csboard.bean.CsBoarNoticeDTO;
import csboard.bean.CsBoardDTO;
import csboard.dao.CsBoardNoticeDAO;
import jakarta.transaction.Transactional;

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
	public List<CsBoarNoticeDTO> getNotices() {
		
		return csBoardNoticeDAO.findAllByOrderBySeqDesc();
			
	}

	@Override
	public Optional<CsBoarNoticeDTO> getNotice(int seq) {
		
		return csBoardNoticeDAO.findById(seq);
	}

	@Override
	@Transactional
	public void delete(int seq) {
		csBoardNoticeDAO.deleteBySeq(seq);
		
	}

	@Override
	public void update(CsBoarNoticeDTO csBoardNoticeDTO) {
		csBoardNoticeDAO.save(csBoardNoticeDTO);
	}

	@Override
	public Optional<CsBoarNoticeDTO> getNoticeInt(int seq) {
		// TODO Auto-generated method stub
		return csBoardNoticeDAO.findById(seq);
		}

}
