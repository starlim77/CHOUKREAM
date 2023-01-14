package shop.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;

import jakarta.transaction.Transactional;
import shop.bean.UsedItemLikeDTO;


public interface UsedItemLikeDAO extends JpaRepository<UsedItemLikeDTO, Integer> {
	
//	@Query("select usedItemLike from UsedItemLike usedItemLike where usedItemLike.seq = :seq")
//	@Query("select usedItemLikeDTO from UsedItemLikeDTO usedItemLikeDTO where usedItemLikeDTO.seq = :seq")
//	public List<UsedItemLikeDTO> itemLike(@Param("keyword") int seq);

	@Query("select usedItemLikeDTO from UsedItemLikeDTO usedItemLikeDTO where usedItemLikeDTO.seq = :seq AND usedItemLikeDTO.id = :id And usedItemLikeDTO.shopKind = :shopKind")
	public UsedItemLikeDTO itemLike(int seq, String id, String shopKind);

	@Transactional
	public void deleteBySeqAndIdAndShopKind(int seq, String id,String shopKind);

	@Query("select count(*) as count from UsedItemLikeDTO usedItemLikeDTO where usedItemLikeDTO.seq = :seq And usedItemLikeDTO.shopKind = :shopKind")
	public Long likeCount(int seq, String shopKind);
	
	
	
	
	
//	@Query("delete from UsedItemLikeDTO usedItemLikeDTO where usedItemLikeDTO.id = :id")
//	public void itemLikeCheckOut(@Param("usedItemLikeDTO") UsedItemLikeDTO usedItemLikeDTO);
//	
	
//	@Modifying
//	@Transactional
//	@Query(value =  "delete from used_item_like where id = ?1 and seq = ?2" , nativeQuery = true)
//	public void itemLikeCheckOut(@Param("seq")int seq,@Param("id") String id);
	
	
}
