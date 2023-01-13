package lookbook.service;

import java.util.List;

import lookbook.bean.StyleLikesDTO;

public interface StyleLikesService {

	public int save(StyleLikesDTO styleLikesDTO,boolean isLike);
	public List<StyleLikesDTO> findLikes(String id);
	public int findAll(StyleLikesDTO styleLikesDTO);
}
