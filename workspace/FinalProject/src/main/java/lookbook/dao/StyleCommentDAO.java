package lookbook.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import lookbook.entity.StyleCommentEntity;
import lookbook.entity.StyleEntity;

@Repository
public interface StyleCommentDAO extends JpaRepository<StyleCommentEntity, String>{
	
	//select * from style_comment_table where styleSeq=? order by seq desc;
	
	public List<StyleCommentEntity> findAllByStyleEntityOrderByIdDesc(StyleEntity styleEntity);
}
