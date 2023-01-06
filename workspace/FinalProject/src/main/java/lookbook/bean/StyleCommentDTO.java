package lookbook.bean;

import java.sql.Timestamp;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lookbook.entity.StyleCommentEntity;

@Data
@ToString
@NoArgsConstructor // 기본생성자
@AllArgsConstructor // 모든 필드를 매개변수로 하는 생성자
public class StyleCommentDTO {
	private Long id;
	private String commentMember;
	private String commentContents;
	private int styleSeq;
	private Timestamp commentCreatedTime;
	
	public static StyleCommentDTO toStyleCommentDTO(StyleCommentEntity styleCommentEntity, int styleSeq) {
		//entity  -> DTO
		StyleCommentDTO styleCommentDTO = new StyleCommentDTO();
		 styleCommentDTO.setId(styleCommentEntity.getId());
		 styleCommentDTO.setCommentMember(styleCommentEntity.getCommentMember());
		 styleCommentDTO.setCommentContents(styleCommentEntity.getCommentContents());
		 styleCommentDTO.setCommentCreatedTime(styleCommentEntity.getCreatedTime());		
		 //styleCommentDTO.setStyleSeq(styleCommentEntity.getStyleEntity().getSeq());//자식한테 있는 부모엔티티에서 seq 값 꺼내는것
		 //service메서드에 @Transactional 붙여줘
		 styleCommentDTO.setStyleSeq(styleSeq);
		return styleCommentDTO;
	}
}
