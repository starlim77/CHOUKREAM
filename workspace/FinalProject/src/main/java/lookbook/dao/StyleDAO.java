package lookbook.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import lookbook.bean.LikesDTO;
import lookbook.entity.StyleEntity;
import lookbook.entity.StyleFileEntity;

@Repository
public interface StyleDAO extends JpaRepository<StyleEntity, String> {
	
	Optional<StyleEntity> findBySeq(int seq);	
	
	public List<StyleEntity> findAllByOrderBySeqDesc();
	
	Optional<StyleEntity> findById(String id);
	
	List<StyleEntity> findAllByIdOrderBySeqDesc(String id); 
	
	void deleteBySeq(int seq);
	
	//SELECT COUNT(*) FROM style_table where id= 'id'?
	Long countById(String id);

	
	@Query(nativeQuery = true,
//			value = "select a.seq, a.comment_count, a.content, a.id, a.likes_count, a.logtime, ifnull(b.member_id, 'false') as isLikes from style_table as a left outer join (select member_id, style_seq from style_likes_table where member_id=12) as b on b.style_seq = a.seq where a.id= 12 ;")
	value= "select a.seq, a.comment_count, a.content, a.id, a.likes_count, a.logtime, ifnull(b.member_id, 'false') as isLikes , c.stored_file_name from style_table as a left outer join (select member_id, style_seq from style_likes_table where member_id=:id) as b on b.style_seq = a.seq left outer join (select id, group_concat(stored_file_name) as stored_file_name, style_seq from style_file_table group by style_seq) as c on c.style_seq = a.seq where a.id=:id")
	List<LikesDTO> findLikes(@Param("id") String id);


	
	 
	   
}
