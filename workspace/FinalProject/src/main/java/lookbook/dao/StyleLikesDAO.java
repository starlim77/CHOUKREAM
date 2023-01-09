package lookbook.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import lookbook.entity.StyleLikesEntity;

public interface StyleLikesDAO extends JpaRepository<StyleLikesEntity, String> {
	
	Optional<StyleLikesEntity> findByMemberDto_idAndStyleEntity_seq(String id, int style_seq);
								
    

}
