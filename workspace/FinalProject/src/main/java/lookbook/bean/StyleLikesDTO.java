package lookbook.bean;


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
	
	private Long memberId;   //로그인id
	
	private int styleSeq;  //게시글번호

	public static StyleLikesDTO  toStyleLikesDTO(StyleLikesEntity styleLikesEntity, int styleSeq) {
		StyleLikesDTO styleLikesDTO = new StyleLikesDTO();
//		styleLikesDTO.setLikesId(styleLikesEntity.isLikesId());
		styleLikesDTO.setLikesId(styleLikesEntity.getLikesId());
		styleLikesDTO.setMemberId(styleLikesEntity.getMemberDto().getId());   //로그인한 id
		styleLikesDTO.setStyleSeq(styleLikesEntity.getStyleEntity().getSeq());  //게시글 번호
		
		return styleLikesDTO;
		
		
	}
	
	

}
