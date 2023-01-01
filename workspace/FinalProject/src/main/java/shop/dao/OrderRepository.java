package shop.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import shop.bean.OrderDTO;

@Repository
public interface OrderRepository extends JpaRepository<OrderDTO, Integer> {
	
	@Query("select orderDTO from OrderDTO orderDTO where orderDTO.buySell = 1 and orderDTO.seq = :seq order by orderDTO.orderPrice asc")
	public List<OrderDTO> getSellOrderList(@Param("seq") int seq);
	
	@Query("select orderDTO from OrderDTO orderDTO where orderDTO.buySell = 0 and orderDTO.seq = :seq order by orderDTO.orderPrice desc")
	public List<OrderDTO> getBuyOrderList(@Param("seq") int seq);
}
