package lookbook.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import member.bean.MemberDto;

@Data
@Entity
@Table(name= "style_following_table")
public class StyleFollowingEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	//중간 테이블 생성
	//fromUser가 toUser를 팔로잉 함
	//toUser가 fromUser를 팔로워로
	
	@ManyToOne
	@JoinColumn(name="fromUserId")
	private MemberDto fromUser;
	
	@ManyToOne
	@JoinColumn(name="toUserId")
	private MemberDto toUser;
	
	
	public static StyleFollowingEntity toFollowingEntity(MemberDto memberDto, StyleEntity styleEntity ) {
		//DTO -> Entity
		StyleFollowingEntity styleFollowingEntity = new StyleFollowingEntity();
		
		//현재 로그인한 멤버
		styleFollowingEntity.setFromUser(memberDto);
		
		//글에 묶여있는 멤버
		//styleFollowingEntity.setToUser(memberDto.getName(styleEntity.getId()));
		
		return styleFollowingEntity;
		
	}
	
	
}
