package lookbook.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import lookbook.entity.StyleLikesEntity;

public interface StyleLikesDAO extends JpaRepository<StyleLikesEntity, String> {
	
	
//	public Optional<StyleLikesEntity> findByMemberIdAndStyle_seq(Long memberId,int style_seq);
								
    

}
