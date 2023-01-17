package lookbook.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lookbook.entity.StyleFollowingEntity;
import member.bean.MemberDto;

@Data
@ToString
@NoArgsConstructor // 기본생성자
@AllArgsConstructor // 모든 필드를 매개변수로 하는 생성자
public class StyleFollowingDTO {
	
	private Long id;
	
	private String styleSeq;
	
	private MemberDto follower;//팔로우 클릭한사람
	
	private MemberDto followee;//팔로우 클릭당한사람
	
	public static StyleFollowingDTO toStyleFollowingDTO(StyleFollowingEntity styleFollowingEntity) {
	//entity -> DTO
		StyleFollowingDTO styleFollowingDTO = new StyleFollowingDTO();
		styleFollowingDTO.setId(styleFollowingEntity.getId());
		styleFollowingDTO.setFollower(styleFollowingEntity.getFollower());
		styleFollowingDTO.setFollowee(styleFollowingEntity.getFollowee());
		
		return styleFollowingDTO;
	}
}
