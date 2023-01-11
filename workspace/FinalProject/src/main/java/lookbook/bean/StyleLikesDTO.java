package lookbook.bean;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lookbook.entity.StyleLikesEntity;

@Data
@ToString
@NoArgsConstructor // 기본생성자
@AllArgsConstructor // 모든 필드를 매개변수로 하는 생성자
public class StyleLikesDTO {
	
	private Long likesId;
	
//	public static StyleLikesDTO  toStyleLikesDTO(StyleLikesEntity styleLikesEntity) {
//		StyleLikesDTO styleLikesDTO = new StyleLikesDTO();
//		styleLikesDTO.setLikesId(styleLikesEntity.getLikesId());
//		
//	}
	
	

}
