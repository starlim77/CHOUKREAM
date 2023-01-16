package csboard.bean;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.data.annotation.CreatedDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;
@Data
@Entity
@SequenceGenerator(
	      name = "csboardNotice_SEQ_GENERATOR"
	       , sequenceName = "csBoardNotice_SEQ"
	       , initialValue = 1
	       , allocationSize = 1
	   )
@Table(name="csboardNotice")
public class CsBoarNoticeDTO {
	
	
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "csboardNotice_SEQ_GENERATOR")
	@Column(name="seq")
	@Id
	private int seq;
	@Column(name="category")
	private String category;
	
	@Column(name="Createdate",nullable = false)
	@CreatedDate
	private String Createdate;
	@PrePersist
	public void prePersist() {
		if (Createdate == null) {
			Createdate = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy.MM.dd"));
		}
	}
	
	@Column(name="title")
	private String title;
	@Column(name="content", length=100000)
	private String content;
	@Column(name="id")
	private String id;
	@Column(name="filename", length=500)
	private String filename;
	@Column(name="filepath", length=500)
	private String filepath;

}
