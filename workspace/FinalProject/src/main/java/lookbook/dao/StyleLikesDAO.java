package lookbook.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import lookbook.entity.StyleLikesEntity;

@Repository
public interface StyleLikesDAO extends JpaRepository<StyleLikesEntity, String> {

	//쿼리문 select  likes_id from style_likes_table where member_id = 1 and style_seq = 1;
	public Optional<StyleLikesEntity> findByMemberDto_IdAndStyleEntity_Seq(Long memberId, int styleSeq);

	public void deleteByMemberDto_IdAndStyleEntity_Seq(Long memberId, int styleSeq);
	
	//쿼리 select COUNT(*) from style_likes_table where style_seq = 2;
	public int countByStyleEntity_Seq(int styleSeq);

	
	
 

}
