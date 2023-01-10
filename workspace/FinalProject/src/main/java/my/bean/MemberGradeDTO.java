package my.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Table(name = "memberGrade")
@Entity
@Data
public class MemberGradeDTO {
	
	@Id
	@Column
	private String id;
	
	@Column
	private String grade;
	
}
