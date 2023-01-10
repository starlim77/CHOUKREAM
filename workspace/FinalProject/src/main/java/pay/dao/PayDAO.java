package pay.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import pay.bean.CompletePaymentDTO;

public interface PayDAO<T> extends JpaRepository<CompletePaymentDTO, Integer> {

	
	@Query(nativeQuery = true ,value = "select nextval('order_number') from dual")
	public int getOrderNumber();

}
