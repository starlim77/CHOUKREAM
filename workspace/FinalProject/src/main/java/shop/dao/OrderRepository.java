package shop.dao;

import java.util.List;
import java.util.Optional;

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

	@Query(value = "select min(order_price) as order_price from order_table where seq= :seq and size = :size  group by seq", nativeQuery=true)
	public Optional<Integer> getProductMin(@Param("seq") int seq, @Param("size") String size);
}
