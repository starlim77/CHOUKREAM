package shop.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import shop.bean.ProductDTO;

@Repository
public interface ShopDAO extends JpaRepository<ProductDTO, Integer> {
	
}
