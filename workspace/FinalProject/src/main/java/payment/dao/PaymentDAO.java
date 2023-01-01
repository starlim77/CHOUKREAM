package payment.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import payment.bean.PaymentDTO;

@Repository
public interface PaymentDAO extends JpaRepository<PaymentDTO, String>{

}
