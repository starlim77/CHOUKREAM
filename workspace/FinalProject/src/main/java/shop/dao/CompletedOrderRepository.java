package shop.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import shop.bean.CompletedOrderDTO;

@Repository
public interface CompletedOrderRepository extends JpaRepository<CompletedOrderDTO, Integer> {

	public List<CompletedOrderDTO> findBySeqOrderByTradeDateDesc(int seq);
}
