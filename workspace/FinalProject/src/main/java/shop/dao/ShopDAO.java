package shop.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import shop.bean.ProductDTO;

@Repository
public interface ShopDAO extends JpaRepository<ProductDTO, Integer> {

	List<ProductDTO> findProductDTOsByCategory(String shoes);

	
//	@Query("select productDTO from ProductDTO productDTO where productDTO.category = :shoes")
//	List<ProductDTO> getShoesList(@Param("shoes") String shoes);

}
