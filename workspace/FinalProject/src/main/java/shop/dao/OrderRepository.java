package shop.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.jaxb.SpringDataJaxb.OrderDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.fasterxml.jackson.annotation.JacksonInject.Value;

import lombok.val;
import shop.bean.BidsListDTO;
import shop.bean.OrderDTO;
import shop.bean.SizeMinDTO;

@Repository
public interface OrderRepository extends JpaRepository<OrderDTO, Integer> {
	
	@Query("select orderDTO from OrderDTO orderDTO where orderDTO.buySell = 1 and orderDTO.seq = :seq order by orderDTO.orderPrice asc")
	public List<OrderDTO> getSellOrderList(@Param("seq") int seq);
	
	@Query("select orderDTO from OrderDTO orderDTO where orderDTO.buySell = 0 and orderDTO.seq = :seq order by orderDTO.orderPrice desc")
	public List<OrderDTO> getBuyOrderList(@Param("seq") int seq);
	
	@Query(nativeQuery = true,
            value = "select size, max(price) as price from"
            		+ "(SELECT size, null as price FROM product_size_table where seq=:seq"
            		+ " UNION distinct "
            		+ "SELECT size, min(order_price) as price FROM order_table where seq=:seq and buy_sell=1 group by (size) order by size) a"
            		+ " group by (size)")
	public List<SizeMinDTO> getProductSize(@Param("seq") int seq);

	@Query("select orderDTO from OrderDTO orderDTO where orderDTO.buySell = 1 and orderDTO.seq = :seq and orderDTO.size = :size order by orderDTO.orderPrice asc")
	public List<OrderDTO> getSellOrderListBySize(@Param("seq") int seq, @Param("size") String size);

	@Query("select orderDTO from OrderDTO orderDTO where orderDTO.buySell = 0 and orderDTO.seq = :seq and orderDTO.size = :size order by orderDTO.orderPrice desc")
	public List<OrderDTO> getBuyOrderListBySize(@Param("seq") int seq, @Param("size") String size);

	@Query(nativeQuery = true,
            value = "select size, max(price) as price from"
            		+ "(SELECT size, null as price FROM product_size_table where seq=:seq"
            		+ " UNION distinct "
            		+ "SELECT size, max(order_price) as price FROM order_table where seq=:seq and buy_sell=0 group by (size) order by size) a"
            		+ " group by (size)")
	public List<SizeMinDTO> getProductSizeSell(int seq);

	@Query(nativeQuery =true,
			value = "select size, order_price as price, count(order_price) as count from order_table where buy_sell = 1 and size = :size and seq = :seq group by (order_price) order by order_price asc")
	public List<BidsListDTO> getSellBidsListBySize(@Param("seq") int seq, @Param("size") String size);

	
	@Query(nativeQuery =true,
			value = "select size, order_price as price, count(order_price) as count from order_table where buy_sell = 1 and seq = :seq group by (order_price) order by order_price asc")
	public List<BidsListDTO> getSellBidsList(int seq);

	@Query(nativeQuery =true,
			value = "select size, order_price as price, count(order_price) as count from order_table where buy_sell = 0 and seq = :seq group by (order_price) order by order_price desc")
	public List<BidsListDTO> getBuyBidsList(int seq);

	@Query(nativeQuery =true,
			value = "select size, order_price as price, count(order_price) as count from order_table where buy_sell = 0 and size = :size and seq = :seq group by (order_price) order by order_price desc")
	public List<BidsListDTO> getBuyBidsListBySize(@Param("seq") int seq, @Param("size") String size);

	public List<OrderDTO> findAllBySellOrderUser(String sellOrderUser);

	public List<OrderDTO> findAllByBuyOrderUser(String buyOrderUser);
	
//	@Query(value = "select min(order_price) as order_price from order_table where seq= :seq and size = :size  group by seq", nativeQuery=true)
//	public Optional<Integer> getProductMin(@Param("seq") int seq, @Param("size") String size);

}
