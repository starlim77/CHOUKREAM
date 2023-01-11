package lookbook.dao;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import lookbook.bean.StyleDTO;
import lookbook.entity.StyleFileEntity;

@Repository
public interface StyleFileDAO extends JpaRepository<StyleFileEntity, String>{

	
}
