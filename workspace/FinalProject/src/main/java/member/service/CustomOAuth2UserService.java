package member.service;

import java.util.Collections;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import member.bean.Authority;
import member.bean.MemberDto;
import member.bean.OAuth2Attribute;
import member.dao.MemberDAO;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {
	private final MemberDAO memberDAO;
	private PasswordEncoder passwordEncoder;

	@Override
	public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
		OAuth2UserService<OAuth2UserRequest, OAuth2User> oAuth2UserService = new DefaultOAuth2UserService();
		OAuth2User oAuth2User = oAuth2UserService.loadUser(userRequest);
		
		String registrationId = userRequest.getClientRegistration().getRegistrationId(); //OAuth 서비스 이름
		String userNameAttributeName = userRequest.getClientRegistration()
                								  .getProviderDetails()
                								  .getUserInfoEndpoint()
                								  .getUserNameAttributeName(); //OAuth 로그인 시 키(pk)가 되는 값
		
		System.out.println("registrationId = " + registrationId);
		System.out.println("userNameAttributeName = " +userNameAttributeName);
		
		
		OAuth2Attribute oAuth2Attribute = OAuth2Attribute.of(registrationId, userNameAttributeName, oAuth2User.getAttributes());
		
		System.out.println("oAuth2Attribute = " + oAuth2Attribute);
		
		MemberDto memberDto = memberDAO.findByEmailAndProvider(oAuth2Attribute.getEmail(), registrationId);
		
		if(memberDto == null) {
			memberDto = MemberDto.socialBuilder()
					.email(oAuth2Attribute.getEmail())
					.password(new BCryptPasswordEncoder().encode("password"))
					.phone("01000000000")
					.name(oAuth2Attribute.getName())
					.authority(Authority.ROLE_USER)
					.smsOption(0)
					.emailOption(0)
					.provider(registrationId)
					.build();
			
			memberDAO.save(memberDto);
		}
		
		var memberAttribute = oAuth2Attribute.convertToMap();
		
		return new DefaultOAuth2User(
				Collections.singleton(new SimpleGrantedAuthority("ROLE_USER")),
                memberAttribute, "email");
	}

}
