package lookbook.bean;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "style_table")
public class StyleDTO {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "STYLE_SEQ") 
	@Column(name="seq")
	private int seq;
	
	@Column(name = "id", length=30)
	private String id;
	
	@Column(name="filename", length=500)
	private String filename;
	
	@Column(name="filepath", length=500)
	private String filepath;
	
	@Column(name="content")
	private String content;
	
	@CreationTimestamp  //엔터키가 생성되는 시점의 시간 등록
	private Timestamp logtime;
	
	@Column(name="hit")
	private int hit;
	
	

}
