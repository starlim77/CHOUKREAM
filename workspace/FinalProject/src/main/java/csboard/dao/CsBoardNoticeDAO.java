package csboard.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import csboard.bean.CsBoarNoticeDTO;
@Repository
public interface CsBoardNoticeDAO extends JpaRepository<CsBoarNoticeDTO,Integer> {

	void deleteBySeq(int seq);

	

	List<CsBoarNoticeDTO> findAllByOrderBySeqDesc();

}
