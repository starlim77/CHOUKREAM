package shop.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import shop.bean.NewNewProductDTO;

public interface NewNewProductRepository extends JpaRepository<NewNewProductDTO, Integer> {

}
