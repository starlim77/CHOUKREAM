package pay.dao;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import pay.bean.CompletePaymentDTO;
import pay.bean.SalesDTO;
import shop.bean.BidsListDTO;

public interface PayDAO<T> extends JpaRepository<CompletePaymentDTO, Integer> {
	
	@Query(nativeQuery = true ,value = "select nextval('order_number') from dual")
	public int getOrderNumber();

	@Query(nativeQuery = true, value = "select min(order_price) as price, min(order_seq) as orderSeq, size from order_table where buy_sell = 1 and size = :size and seq = :seq")
	public Optional<BidsListDTO> getSellBidsPriceMin(@Param("size") String size, @Param("seq")int seq);

	@Query(nativeQuery = true, value = "select max(order_price) as price, min(order_seq) as orderSeq, size from order_table where buy_sell = 0 and size = :size and seq = :seq")
	public Optional<BidsListDTO> getBuyBidsPriceMax(@Param("size") String size, @Param("seq") int seq);
	
	@Query(nativeQuery = true, value = "select * from complete_payment where id = :id")
	public List<CompletePaymentDTO> getBuyHistory(@Param("id") String email);

	@Query(nativeQuery = true, value = "select sum(pay_price) as totalPrice from complete_payment where id = :id and status = '결제완료' group by id")
	public int getAllPayPrice(String id);

	@Query(nativeQuery = true, value = "select * from complete_payment where order_number = :orderNumber")
	public Optional<CompletePaymentDTO> findByOrderNumber(String orderNumber);

	@Query(nativeQuery = true, value = "update complete_payment set status = '결제취소' where order_number = :orderNumber")
	public void ChangeStatusColumn(String orderNumber);

	@Query(nativeQuery = true, value = "select * from(\n"
			+ "select id, order_number, pay_price, status, type, log_time, img_name, title, a.size from complete_payment a left join product_table b on a.product_num = b.seq  where type = 'resell'\n"
			+ "union all\n"
			+ "select id, order_number, pay_price, status, type, log_time, img_name, title, a.size from complete_payment a left join new_product b on a.product_num = b.seq  where type = 'new'\n"
			+ "union all\n"
			+ "select a.id, order_number, pay_price, status, type, log_time, img_name, title, a.size from complete_payment a left join used_item b on a.product_num = b.seq where type = 'used') t order by log_time desc")
	public List<SalesDTO> getAllSales();
	

}
