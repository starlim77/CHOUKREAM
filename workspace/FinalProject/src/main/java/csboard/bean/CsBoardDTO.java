package csboard.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;


@Data
@Entity
@SequenceGenerator(
	      name = "csboardFaq_SEQ_GENERATOR"
	       , sequenceName = "csBoardFaq_SEQ"
	       , initialValue = 1
	       , allocationSize = 1
	   )
@Table(name="csboardFaq")
public class CsBoardDTO {
	
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "csboardFaq_SEQ_GENERATOR")
	@Column(name="seq")
	@Id
	private int seq;
	@Column(name="category")
	private String category;
	@Column(name="title")
	private String title;
	@Column(name="content")
	private String content;
	@Column(name="id")
	private String id;
	@Column(name="filename", length=500)
	private String filename;
	@Column(name="filepath", length=500)
	private String filepath;
	

}
