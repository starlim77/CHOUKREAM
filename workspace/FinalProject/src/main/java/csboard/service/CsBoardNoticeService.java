package csboard.service;

import java.util.List;
import java.util.Optional;

import csboard.bean.CsBoarNoticeDTO;
import csboard.bean.CsBoardDTO;

public interface CsBoardNoticeService {

	public void write(CsBoarNoticeDTO csBoardNoticeDTO);

	public List<CsBoarNoticeDTO> getNotices(String string);

	public Optional<CsBoarNoticeDTO> getNotice(int seq);

}
