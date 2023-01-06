package shop.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import shop.bean.UsedItemLikeDTO;

public interface UsedItemLikeDAO extends JpaRepository<UsedItemLikeDTO, Integer> {
	
//	@Query("select usedItemLike from UsedItemLike usedItemLike where usedItemLike.seq = :seq")
//	@Query("select usedItemLikeDTO from UsedItemLikeDTO usedItemLikeDTO where usedItemLikeDTO.seq = :seq")
//	public List<UsedItemLikeDTO> itemLike(@Param("keyword") int seq);

	@Query("select usedItemLikeDTO from UsedItemLikeDTO usedItemLikeDTO where seq= ?1")
	public UsedItemLikeDTO itemLike2(int seq);

}
