package lookbook.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import lookbook.entity.StyleCommentEntity;


public interface StyleCommentDAO extends JpaRepository<StyleCommentEntity, String>{

}
