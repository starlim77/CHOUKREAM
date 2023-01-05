package lookbook.bean;

import java.sql.Timestamp;

import lombok.Data;
import lombok.ToString;
import lookbook.entity.StyleCommentEntity;

@Data
@ToString
public class StyleCommentDTO {
	private Long id;
	private String commentMember;
	private String commentContents;
	private Long styleDetailId;
	private Timestamp commentCreatedTime;
	
	public static StyleCommentDTO toStyleCommentDTO(StyleCommentEntity styleCommentEntity, Long styleDetailId) {
		StyleCommentDTO styleCommentDTO = new StyleCommentDTO();
		 styleCommentDTO.setId(styleCommentEntity.getId());
		 styleCommentDTO.setCommentMember(styleCommentEntity.getCommentMember());
		 styleCommentDTO.setCommentContents(styleCommentEntity.getCommentContents());
		 styleCommentDTO.setCommentCreatedTime(styleCommentEntity.getCreatedTime());
		 styleCommentDTO.setStyleDetailId(styleDetailId);
		return styleCommentDTO;
	}
}
