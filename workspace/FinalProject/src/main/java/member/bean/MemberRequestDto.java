package member.bean;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.Data;

@Data
public class MemberRequestDto {
	private String email;
	private String password;
	private String phone;
	private String[] eventItems;
	
	public MemberDto toMember(PasswordEncoder passwordEncoder) {
		int smsOption = 0;
		int emailOption = 0;
		
		if(eventItems.length != 0) {
			for(int i = 0; i< eventItems.length; i++) {
				if(eventItems[i].equals("sms")) {
					smsOption = 1;
				} else if(eventItems[i].equals("email")) {
					emailOption = 1;
				}
			}
		}
		
		return MemberDto.builder()
				.email(email)
				.password(passwordEncoder.encode(password))
				.phone(phone)
				.authority(Authority.ROLE_USER)
				.smsOption(smsOption)
				.emailOption(emailOption)
				.build();
	}
	
	public UsernamePasswordAuthenticationToken toAuthentication() {
		return new UsernamePasswordAuthenticationToken(email, password);
	}

}
