package lookbook.service;

import lookbook.bean.StyleLikesDTO;

public interface StyleLikesService {

	public int save(StyleLikesDTO styleLikesDTO);
	public int findLikes(StyleLikesDTO styleLikesDTO);
}
