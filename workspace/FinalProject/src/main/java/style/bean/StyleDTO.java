package style.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "styletable")
public class StyleDTO {
	
	@Id
	@Column(name="seq")
	private int seq;
	
	@Column(name = "id", length=30)
	private String id;
	
	@Column(name="photo")
	private String photo;
	
	@Column(name="content")
	private String content;
	
	@Column(name="data")
	private String date;
	
	@Column(name="hit")
	private int hit;
	
	

}
