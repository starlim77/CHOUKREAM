package shop.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import shop.bean.ProductSizeDTO;

public interface ProductSizeRepository extends JpaRepository<ProductSizeDTO, Integer>{

	List<ProductSizeDTO> findAllByProductType(int productType);


}
