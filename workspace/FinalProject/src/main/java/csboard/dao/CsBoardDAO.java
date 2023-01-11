package csboard.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import csboard.bean.CsBoardDTO;

@Repository
public interface CsBoardDAO extends JpaRepository<CsBoardDTO, Integer> {

	List<CsBoardDTO> findByCategory(String category);

	
	List<CsBoardDTO> findByContentContaining(String keyword);


	Optional<CsBoardDTO> findBySeq(int seq);


	void deleteBySeq(int seq);


	List<CsBoardDTO> findAllByCategory(String category);

	//완전 에러 --  keyword 하나로 내용 과 제목 둘다 한꺼번에 찾아서 하는것......ㅠㅠㅠㅠㅠ모르겠음 
//	@Query("csBoardDTO from CsBoardDTO csBoardDTO where csBoardDTO.title like '%' || :keyword || '%' or csBoardDTO.content like '%' || :keyword || '%'")
//	List<CsBoardDTO> find(@Param("keyword") String keyword);





	
	
	
}
