package csboard.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import csboard.bean.CsBoardDTO;
import csboard.dao.CsBoardDAO;
import jakarta.transaction.Transactional;
@Service
public class CsBoardServiceImpl implements CsBoardService {
	@Autowired
	private CsBoardDAO csBoardDAO;

	@Override
	public void write(CsBoardDTO csBoardDTO) {
		csBoardDAO.save(csBoardDTO);
	}

	@Override
	public List<CsBoardDTO> getList() {
		
		return csBoardDAO.findAllByOrderBySeqDesc();
	}

	@Override
	public List<CsBoardDTO> getCategory(String category) {
		// TODO Auto-generated method stub
		return csBoardDAO.findAllByCategoryOrderBySeqDesc(category);
	}

	@Override
	public List<CsBoardDTO> getKeywordSearch(String keyword) {
		return csBoardDAO.findByContentContainingOrderBySeqDesc(keyword);
	}

	@Override
	public Optional<CsBoardDTO> getBoard(int seq) {
		
		return csBoardDAO.findBySeq(seq);
	}
	
	@Transactional
	@Override
	public void delete(int seq) {
		csBoardDAO.deleteBySeq(seq);
	}

	@Override
	public void update(CsBoardDTO csBoardDTO) {
		csBoardDAO.save(csBoardDTO);
		
	}

	@Override
	public List<CsBoardDTO> getNotices(String category) {
		return csBoardDAO.findAllByCategoryOrderBySeqDesc(category);
	}

	@Override
	public Optional<CsBoardDTO> getNotice(int seq) {
		return csBoardDAO.findById(seq);
	}

	
}
