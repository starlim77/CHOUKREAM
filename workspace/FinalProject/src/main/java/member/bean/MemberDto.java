package member.bean;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;
import lookbook.entity.StyleLikesEntity;

@Data
@Entity
@Table(name = "member")
@NoArgsConstructor
@SequenceGenerator(name = "MEMBER_SEQ_GENERATOR", sequenceName = "MEMBER_SEQ", initialValue = 1, allocationSize = 1)
public class MemberDto {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "MEMBER_SEQ_GENERATOR") 
	@Column(name = "member_id")
	private Long id;
	
	@Column(name = "email", nullable = false)
	private String email;
	
	@Column(name = "password", nullable = false)
	private String password;
	
	@Column(name = "phone", nullable = false)
	private String phone;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "profile_image")
	private String profile;
	
	@Enumerated(EnumType.STRING)
    private Authority authority;
	
	@Column(name = "sms_option")
	private int smsOption; //0이면 수신x , 1이면 수신o
	
	@Column(name = "email_option")
	private int emailOption; //0이면 수신x , 1이면 수신o

	@Builder
    public MemberDto(String email, String password, String phone, Authority authority, int smsOption, int emailOption) { 
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.authority = authority;
        this.smsOption = smsOption;
        this.emailOption = emailOption;
    }
	
	//lookbook   
	//cascade = CascadeType.REMOVE  : 멤버id가 삭제되면 멤버가 누른 좋아요도 같이 삭제
//	@OneToMany(mappedBy = "memberDto", cascade = CascadeType.REMOVE, orphanRemoval = true, fetch = FetchType.LAZY)
//	private List<StyleLikesEntity> styleLikesEntity = new ArrayList<>();
//	
	
}
