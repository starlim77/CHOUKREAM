package shop.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import shop.bean.NewProductOptionDTO;

public interface NewProductOptionRepository extends JpaRepository<NewProductOptionDTO, Integer> {

	List<NewProductOptionDTO> findBySeq(int seq);
}
