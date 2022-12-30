package lookbook.bean;

import java.sql.Timestamp;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.web.multipart.MultipartFile;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lookbook.entity.StyleEntity;

@Data
@Entity
@ToString
@NoArgsConstructor // 기본생성자
@AllArgsConstructor // 모든 필드를 매개변수로 하는 생성자
public class StyleDTO {
	
	private int seq;
	
	
	private String id;	
	
	private String filename;	
	
	private String filepath;	
	
	private String content;	
	
	private Timestamp logtime;	
	
	private int hit;
	
	private List<MultipartFile> imgList;//controller에 파일 담는용도
	private String originalFileName; // 원본파일 이름
	private String storedFileName;   //서버 저장용 파일 이름
	private int fileAttached; // 파일 첨부 여부 (첨부1, 미첨부 0)

	public static StyleDTO toStyleDTO(StyleEntity styleEntity) {
		StyleDTO styleDTO = new StyleDTO();
		
		styleDTO.setId(styleEntity.getId());
		styleDTO.setFilename(styleEntity.getFilename());
		styleDTO.setFilepath(styleEntity.getFilepath());
		styleDTO.setContent(styleEntity.getContent());
		styleDTO.setLogtime(styleEntity.getLogtime());
		
		if(styleEntity.getFileAttached() == 0) {
			styleDTO.setFileAttached(styleEntity.getFileAttached()); //0
		} else {
			styleDTO.setFileAttached(styleEntity.getFileAttached()); //1
			// 파일 이름을 가져가야 함.
            // orginalFileName, storedFileName : style_file_table(StyleFileEntity)
            // join
            // select * from style_table b, stylefile_table bf where b.id=bf.style_id
            // and where b.id=?
			
		}
		
		return styleDTO;
	}
		

}
