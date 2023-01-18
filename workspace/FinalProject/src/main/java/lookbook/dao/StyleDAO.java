package lookbook.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import lookbook.bean.LikesDTO;
import lookbook.bean.StyleLikesDTO;
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

	//좋아요포함 내 id만 불러오기
	@Query(nativeQuery = true,
			value= "select a.seq, a.comment_count, a.content, a.id, a.likes_count, a.logtime, a.product_seq, ifnull(b.member_id, 'false') as isLikes , c.stored_file_name , d.email as email from style_table as a left outer join (select member_id, style_seq from style_likes_table where member_id=12) as b on b.style_seq = a.seq left outer join (select id, group_concat(stored_file_name) as stored_file_name, style_seq from style_file_table group by style_seq) as c on c.style_seq = a.seq left outer join (select member_id, SUBSTRING_INDEX(email, '@', 1) AS email FROM member ) as d on d.member_id = a.id where a.id=:id Order By Seq Desc")
	List<LikesDTO> findLikes(@Param("id") String id);
	
	//detail페이지 좋아요포함 전체list 불러오기. 로그인 안했을 때  
	@Query(nativeQuery = true,
			value="select a.seq, a.comment_count, a.content, a.id, a.likes_count, a.logtime, a.product_seq, ifnull(b.member_id, 'false') as isLikes , c.stored_file_name , d.email as email from style_table as a left outer join (select style_seq, group_concat(member_id) as  member_id  from style_likes_table group by style_seq) as b on b.style_seq = a.seq left outer join (select id, group_concat(stored_file_name) as stored_file_name, style_seq from style_file_table group by style_seq) as c on c.style_seq = a.seq left outer join (select member_id, SUBSTRING_INDEX(email, '@', 1) AS email FROM member ) as d on d.member_id = a.id Order By Seq Desc")
	public List<LikesDTO> list();
	
	
	//detail페이지 좋아요포함 전체list 불러오기. 로그인 했을 때
	@Query(nativeQuery = true,
			value="select a.seq, a.comment_count, a.content, a.id, a.likes_count, a.logtime, a.product_seq, ifnull(b.member_id, 'false') as isLikes , c.stored_file_name  , d.email as email from style_table as a left outer join (select member_id, style_seq from style_likes_table where member_id=:id) as b on b.style_seq = a.seq left outer join (select id, group_concat(stored_file_name) as stored_file_name, style_seq from style_file_table group by style_seq) as c on c.style_seq = a.seq left outer join (select member_id, SUBSTRING_INDEX(email, '@', 1) AS email FROM member ) as d on d.member_id = a.id Order By Seq Desc")
	public List<LikesDTO> listById(String id);


	public List<StyleEntity> findAllByIdIn(List<String> idList);
	
	public List<StyleEntity> findByProductSeqOrderBySeqDesc(int productSeq);

	@Query(nativeQuery = true, value = "select * from style_table where product_seq = :seq limit 8")
	List<StyleEntity> getBrandStyleList(int seq);

	
}
