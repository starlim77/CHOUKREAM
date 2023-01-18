package shop.bean;

import java.time.LocalDateTime;
import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="orderTable")
@Data
//@SequenceGenerator(
//	      name = "ORDER_SEQ_GENERATOR"
//	       , sequenceName = "ORDER_SEQ"
//	       , initialValue = 1
//	       , allocationSize = 1
//	   )
public class OrderDTO {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="orderSeq", length = 30)
	private int orderSeq;
	
	@Column(name="seq", length = 30)
	private int seq;
	
	@Column(name="buySell", length = 30)
	private int buySell;
	
	@Column(name="size", length = 30)
	private String size;
	
	@Column(name="orderPrice", length = 30)
	private int orderPrice;
	
	@Column(name="sellOrderUser", length = 30)
	private String sellOrderUser;
	
	@Column(name="buyOrderUser", length = 30)
	private String buyOrderUser;
	
	@CreationTimestamp
	private LocalDateTime uploadDate;

	@Column(name="shipName")
	private String shipName;
   
	   @Column(name="shipPhone")
	   private String shipPhone;
   
   @Column(name="shipAddress")
   private String shipAddress;
   
   @Column(name="ask")
   private String ask;
	
}