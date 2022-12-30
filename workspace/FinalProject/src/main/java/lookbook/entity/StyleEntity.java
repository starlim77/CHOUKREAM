package lookbook.entity;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lookbook.bean.StyleDTO;

@Entity
@Data
@Table(name ="style_table")
public class StyleEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "STYLE_SEQ") 
	@Column(name="seq")
	private int seq;
	
	@Column(name = "id", length=30)
	private String id;
	
	@Column(name="filename", length=150)
	private String filename;
	
	@Column(name="filepath", length=300)
	private String filepath;
	
	@Column(name="content")
	private String content;
	
	@CreationTimestamp  //엔터키가 생성되는 시점의 시간 등록
	private Timestamp logtime;
	
	@Column(name="hit")
	private int hit;
	
	@Column
	private int fileAttached;// 1 or 0
	
	
	public static StyleEntity toSaveEntity(StyleDTO styleDTO) {
		StyleEntity styleEntity = new StyleEntity();
		styleEntity.setId(styleDTO.getId());
		styleEntity.setFilename(styleDTO.getFilename());
		styleEntity.setFilepath(styleDTO.getFilepath());
		styleEntity.setContent(styleDTO.getContent());
		styleEntity.setLogtime(styleDTO.getLogtime());
		styleEntity.setHit(0);
		styleEntity.setFileAttached(0);
		
		return styleEntity;
	}
	
}
