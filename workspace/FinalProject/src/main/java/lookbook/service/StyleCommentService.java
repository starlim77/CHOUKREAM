package lookbook.service;

import java.util.List;

import lookbook.bean.StyleCommentDTO;

public interface StyleCommentService {

	public Long save(StyleCommentDTO styleCommentDTO);

	public List<StyleCommentDTO> findAll(int styleSeq);

	public void delete(String id, String styleSeq);

}
