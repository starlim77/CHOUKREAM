package lookbook.service;

import java.util.List;

import lookbook.bean.LikesDTO;
import lookbook.bean.StyleLikesDTO;

public interface StyleLikesService {

	public int save(StyleLikesDTO styleLikesDTO,boolean isLike);
	public List<LikesDTO> findLikes(String id);
	public int findAll(StyleLikesDTO styleLikesDTO);
//	public boolean checkLikes(StyleLikesDTO styleLikesDTO);
	public List<LikesDTO> list();
	public List<LikesDTO> listById(String id);
	List<LikesDTO> findLikes2(String id);
}
