package my.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "address")
public class AddressDTO {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private Long seq;
	
	@Column(length = 100)
	private String id;
	
	@Column
	private String name;
	
	@Column
	private String zipcode;
	
	@Column
	private String phone;
	
	@Column
	private String addr1;
	
	@Column
	private String addr2;
	
	@Column
	private int defaultAddress;
}
