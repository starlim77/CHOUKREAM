package shop.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import jakarta.transaction.Transactional;
import shop.bean.NewProductOptionDTO;

public interface NewProductOptionRepository extends JpaRepository<NewProductOptionDTO, Integer> {

	List<NewProductOptionDTO> findBySeq(int seq);
	
	@Transactional
	@Modifying
	@Query("update NewProductOptionDTO n set n.inventory = :inventory where n.seq=:seq and n.productOption=:option")
	public void updateInventory(int seq, String option, int inventory);

	
	@Transactional
	@Modifying
	@Query("delete NewProductOptionDTO n where n.seq=:seq and n.productOption=:option")
	void deleteNewProductOption(int seq, String option);
}
