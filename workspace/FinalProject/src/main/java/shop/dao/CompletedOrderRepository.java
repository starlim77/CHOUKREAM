package shop.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import shop.bean.CompletedOrderDTO;

@Repository
public interface CompletedOrderRepository extends JpaRepository<CompletedOrderDTO, Integer> {

	public List<CompletedOrderDTO> findBySeqOrderByTradeDateDesc(int seq);

	@Query("select completedOrderDTO from CompletedOrderDTO completedOrderDTO where completedOrderDTO.seq = :seq and completedOrderDTO.size = :size order by completedOrderDTO.tradeDate desc")
	public List<CompletedOrderDTO> findBySeqOrderByTradeDateDescBySize(@Param("seq") int seq, @Param("size") String size);

	public List<CompletedOrderDTO> findSeqByBuyOrderUser(String email);
}
