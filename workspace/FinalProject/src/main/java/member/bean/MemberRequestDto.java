package member.bean;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.Data;

@Data
public class MemberRequestDto {
	private String email;
	private String password;
	private String phone;
	
	public MemberDto toMember(PasswordEncoder passwordEncoder) {
		return MemberDto.builder()
				.email(email)
				.password(passwordEncoder.encode(password))
				.phone(phone)
				.authority(Authority.ROLE_USER)
				.build();
	}
	
	public UsernamePasswordAuthenticationToken toAuthentication() {
		return new UsernamePasswordAuthenticationToken(email, password);
	}

}
