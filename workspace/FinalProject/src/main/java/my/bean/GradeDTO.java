package my.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "grade")
@Data
public class GradeDTO {
	
	@Id
	@Column
	private String id;
	
	@Column
	private String grade;
}
