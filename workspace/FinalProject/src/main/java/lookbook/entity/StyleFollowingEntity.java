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
	@JoinColumn(name="followerId")
	private MemberDto follower;
	
	@ManyToOne
	@JoinColumn(name="followeeId")
	private MemberDto followee;
	
	
	public static StyleFollowingEntity toFollowingEntity(MemberDto follower, MemberDto followee) {
		//DTO -> Entity
		StyleFollowingEntity styleFollowingEntity = new StyleFollowingEntity();
		
		//현재 로그인한 멤버 팔로워
		styleFollowingEntity.setFollower(follower);
		
		//글에 묶여있는 멤버 팔로이
		styleFollowingEntity.setFollowee(followee);
		
		return styleFollowingEntity;
		
	}
	
	
}
