package lookbook.bean;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.multipart.MultipartFile;




import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lookbook.entity.StyleEntity;
import lookbook.entity.StyleFileEntity;

@Data
@ToString
@NoArgsConstructor // 기본생성자
@AllArgsConstructor // 모든 필드를 매개변수로 하는 생성자
public class StyleDTO {
	
	private int seq;	
	
	private String id;	
		
	private String content;	
	
	private Timestamp logtime;	
	
	private int hit;	
	
	private List<MultipartFile> styleFile;//controller에 파일 담는용도
	private List<String> originalFileName; // 원본파일 이름
	private List<String> storedFileName;   //서버 저장용 파일 이름
	private int fileAttached; // 파일 첨부 여부 (첨부1, 미첨부 0)
	
	//private List<StyleCommentDTO> comment;

	
	public static StyleDTO toStyleDTO(StyleEntity styleEntity) {
		StyleDTO styleDTO = new StyleDTO();
		
		styleDTO.setSeq(styleEntity.getSeq());
		styleDTO.setId(styleEntity.getId());		
		styleDTO.setContent(styleEntity.getContent());
		styleDTO.setLogtime(styleEntity.getLogtime());
		
		if(styleEntity.getFileAttached() == 0) {
			styleDTO.setFileAttached(styleEntity.getFileAttached()); //0
		} else {
			List<String> originalFileNameList = new ArrayList<>();
			List<String> storedFileNameList = new ArrayList<>();
			
			
			for(StyleFileEntity styleFileEntity : styleEntity.getStyleFileEntityList()) {
				
				originalFileNameList.add(styleFileEntity.getOriginalFileName());
				storedFileNameList.add(styleFileEntity.getStoredFileName());
				
			}//for
			
			styleDTO.setOriginalFileName(originalFileNameList);
			styleDTO.setStoredFileName(storedFileNameList);
			
			//styleDTO.setFileAttached(styleEntity.getFileAttached()); //1
			// 파일 이름을 가져가야 함.
            // orginalFileName, storedFileName : style_file_table(StyleFileEntity)에 들어있다
            // join
            // select * from style_table s, stylefile_table sf where s.id=sf.style_id
            // and where s.id=?
			
			
		}
		
		//styleDTO.setComment(styleEntity.getStyleCommentEntityList().stream().map(StyleCommentDTO::new).collect(Collectors.toList());
		
		return styleDTO;
	}
		

}
