package my.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "point")
@Data
public class PointDTO {
	
	@Id
	@Column
	private String id;
	
	@Column
	private int point;
	
	
}
