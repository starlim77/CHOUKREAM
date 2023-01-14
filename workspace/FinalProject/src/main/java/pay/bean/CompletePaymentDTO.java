package pay.bean;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "completePayment")
@Data
public class CompletePaymentDTO {
	
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	@Column
//	private Long seq;
	
	@Column
	private String id;
	
	@Column
	private String type;
	
	@Column
	private int productNum;
	
	@Column
	private int orderTableSeq;
	
	@Column
	private String size;
	
	@Id
	@Column
	private String orderNumber;
	
	@Column
	private int productPrice;
	
	@Column
	private int payPrice;
	
	@Column
	private int usePoint;
	
	@Column
	private String shipName;
	
	@Column
	private String shipPhone;
	
	@Column
	private String shipAddress;
	
	@Column
	private String ask;
	
	@Column
	private String status;
	
	@Column
	private int seq=0;
	
	@CreationTimestamp
	private LocalDateTime logTime;
	
	@Column
	private int accuralPoint;
}
