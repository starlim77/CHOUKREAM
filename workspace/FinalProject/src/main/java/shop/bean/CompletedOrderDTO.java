package shop.bean;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="completedOrderTable")
@Data
@SequenceGenerator(
	      name = "COMPLETED_ORDER_SEQ_GENERATOR"
	       , sequenceName = "COMPLETED_ORDER_SEQ"
	       , initialValue = 1
	       , allocationSize = 1
	   )
public class CompletedOrderDTO {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "COMPLETED_ORDER_SEQ_GENERATOR")
	@Column(name="completedOrderSeq", length = 30)
	private int completedOrderSeq;
	
	@Column(name="seq", length = 30)
	private int seq;
	
	@Column(name="orderSeq", length = 30)
	private int orderSeq;
	
	@Column(name="size", length = 30)
	private String size;
	
	@Column(name="price", length = 30)
	private int price;
	
	@Column(name="sellOrderUser", length = 30)
	private String sellOrderUser;
	
	@Column(name="buyOrderUser", length = 30)
	private String buyOrderUser;
	
	@Column(name="tradeDate", length = 30)
	private Date tradeDate; 
	
	@Column(name="shipName")
	private String shipName;
	
	@Column(name="shipPhone")
	private String shipPhone;
	
	@Column(name="shipAddress")
	private String shipAddress;
	
	@Column(name="ask")
	private String ask;
}
