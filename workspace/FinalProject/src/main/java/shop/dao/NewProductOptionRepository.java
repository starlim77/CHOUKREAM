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

	@Query(nativeQuery = true, value = "select * from new_product_option where seq = :seq order by new_option_seq")
	List<NewProductOptionDTO> getProductSizeNew(int seq);

	@Transactional
	@Modifying
	@Query(nativeQuery = true, value = "update new_product_option set inventory = inventory - 1 where seq = :productNum and product_option = :size")
	void subInventory(int productNum, String size);
}
