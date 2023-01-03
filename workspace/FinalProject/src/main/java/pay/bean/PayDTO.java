package pay.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "ordernum")
public class PayDTO {
	
	@Id
	@Column
	int orderNum;
}
