package csboard.service;

import java.util.List;
import java.util.Optional;

import csboard.bean.CsBoarNoticeDTO;
import csboard.bean.CsBoardDTO;

public interface CsBoardNoticeService {

	public void write(CsBoarNoticeDTO csBoardNoticeDTO);

	public List<CsBoarNoticeDTO> getNotices();

	public Optional<CsBoarNoticeDTO> getNotice(int seq);

	public void delete(int seq);

	public void update(CsBoarNoticeDTO csBoardNoticeDTO);

	public Optional<CsBoarNoticeDTO> getNoticeInt(int seq);

}
