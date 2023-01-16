package lookbook.bean;


import java.util.List;

import lookbook.entity.StyleEntity;
import lookbook.entity.StyleLikesEntity;

public interface LikesDTO {
	String getSeq();
	Integer getComment_count();
	String getContent();
	String getId();
	Integer getLikes_count();
	String getLogTime();
	String getIslikes(); 
	String getStored_file_name();
	Integer getProduct_seq();


	
	
}
