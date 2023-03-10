package shop.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import jakarta.transaction.Transactional;
import shop.bean.NewProductDTO;
import shop.bean.UsedItemDTO;
import shop.bean.UsedItemLikeDTO;

@Repository
public interface UsedItemDAO extends JpaRepository<UsedItemDTO, Integer>{

	@Transactional
	@Modifying
	@Query("update UsedItemDTO usedItemDTO set usedItemDTO.likes = usedItemDTO.likes + 1 where usedItemDTO.seq = :seq")
	public void likeUp(int seq);

	@Transactional
	@Modifying
	@Query("update UsedItemDTO usedItemDTO set usedItemDTO.likes = usedItemDTO.likes - 1 where usedItemDTO.seq = :seq")
	public void likeDown(int seq);
	
	@Transactional
	@Modifying
	@Query("update UsedItemDTO usedItemDTO set usedItemDTO.sellingState =?2 where usedItemDTO.seq = ?1")
	public void saveByIdAndSellingState(int seq, boolean sellingState);

	@Query("SELECT usedItemDTO FROM UsedItemDTO usedItemDTO WHERE usedItemDTO.id like %:keyword%")
	public List<UsedItemDTO> getSearchId(@Param("keyword") String keyword);

	@Query("SELECT usedItemDTO FROM UsedItemDTO usedItemDTO WHERE usedItemDTO.title like %:keyword%")
	public List<UsedItemDTO> getSearchTitle(@Param("keyword") String keyword);
	
	@Query("SELECT memberDTO.email FROM MemberDto memberDTO WHERE memberDTO.id = :seq")
	public String getId(int seq);

	//수정 안되면 안 쓸 쿼리(홍헌)
	@Query(value="select * from used_item left join (select seq,count(*) as report_num from used_item_report group by seq) as report on used_item.seq = report.seq", nativeQuery = true )
	public List<UsedItemDTO> getAdminItem();

	@Transactional
	@Modifying
	@Query("update UsedItemDTO usedItemDTO set usedItemDTO.reportNum = usedItemDTO.reportNum + 1 where usedItemDTO.seq = :seq")
	public void reportUp(int seq);

	@Query("select sum(usedItemDTO.reportNum) from UsedItemDTO usedItemDTO where usedItemDTO.id = :id")
	public int getTotalReport(String id);

	@Query("select count(usedItemDTO) from UsedItemDTO usedItemDTO where usedItemDTO.id = :id and usedItemDTO.sellingState=false")
	public int getFinishedTrade(String id);
	
//	
//	@Modifying
//	@Transactional
//	@Query(value="delete from used_item where seq = ?1", nativeQuery=true)
//	public void deleteItem(@Param("seq") int seq);
//	//https://stackoverflow.com/questions/62778719/spring-data-jpa-delete-query
//	
	
}
