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
import member.bean.MemberDto;

//DB의 테이블 역할을 하는 클래스
@Entity
@Data
@Table(name= "style_likes_table")
public class StyleLikesEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="likes_id")
	private Long likesId;  //string -> long 
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private MemberDto memberDto;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "style_seq")
	private StyleEntity styleEntity;  //부모 부르는데 알아서 id값만 들어감
	
	public static StyleLikesEntity toLikesEntity(MemberDto memberDto, StyleEntity styleEntity){
		StyleLikesEntity likesEntity = new StyleLikesEntity();
		likesEntity.setMemberDto(memberDto);
		likesEntity.setStyleEntity(styleEntity);  //seq로 조회한 부모 entity 넘기기 	

        return likesEntity;
    }


}
