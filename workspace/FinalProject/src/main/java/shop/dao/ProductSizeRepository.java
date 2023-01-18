package shop.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import jakarta.transaction.Transactional;
import shop.bean.ProductSizeDTO;

public interface ProductSizeRepository extends JpaRepository<ProductSizeDTO, Integer>{

//	public List<ProductSizeDTO> findAllByProductType(int productType);

	public List<ProductSizeDTO> findBySeq(int seq);

	@Transactional
	@Modifying
	@Query("delete ProductSizeDTO n where n.seq=:seq and n.size=:option")
	public void deleteResellProductOption(int seq, String option);

}
