package lookbook.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import lookbook.entity.StyleFollowingEntity;

@Repository
public interface StyleFollowingDAO extends JpaRepository<StyleFollowingEntity, String>{

}
