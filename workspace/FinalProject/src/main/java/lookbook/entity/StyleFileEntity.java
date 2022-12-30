package lookbook.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;


@Entity
@Data
@Table(name = "style_file_table")
public class StyleFileEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String originalFileName;
	
	@Column
	private String storedFileName; 
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "style_seq")
	private StyleEntity styleEntity;
	
	public static  StyleFileEntity toStyleFileEntity(StyleEntity styleEntity, String originalFileName, String storedFileName) {
		StyleFileEntity styleFileEntity = new StyleFileEntity();
		styleFileEntity.setOriginalFileName(originalFileName);
		styleFileEntity.setStoredFileName(storedFileName);
		styleFileEntity.setStyleEntity(styleEntity);
		
		return styleFileEntity;
	}
	
}
