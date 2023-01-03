package member.service;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jwt.TokenProvider;

import lombok.RequiredArgsConstructor;
import member.bean.MemberDto;
import member.bean.MemberRequestDto;
import member.bean.MemberResponseDto;
import member.bean.RefreshToken;
import member.bean.TokenDto;
import member.dao.MemberDAO;
import member.dao.RefreshTokenRepository;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
	private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final MemberDAO memberDAO;
    private final PasswordEncoder passwordEncoder;
    private final TokenProvider tokenProvider;
    private final RefreshTokenRepository refreshTokenRepository;

    @Transactional
    public MemberResponseDto join(MemberRequestDto memberRequestDto) {
        if (memberDAO.existsByEmail(memberRequestDto.getEmail())) {
            throw new RuntimeException("이미 가입되어 있는 유저입니다");
        }

        MemberDto memberDto = memberRequestDto.toMember(passwordEncoder);
        return MemberResponseDto.of(memberDAO.save(memberDto));
    }

    @Transactional
	public TokenDto login(MemberRequestDto memberRequestDto) {
		//1. login ID/PW 를 기반으로 AuthenticationToken 생성
    	UsernamePasswordAuthenticationToken authenticationToken = memberRequestDto.toAuthentication();
    	System.out.println("authenticationToken" + authenticationToken);
    	
    	//2. 실제로 검증이 이루어지는 부분
    	Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
    	
    	//3. 인증 정보를 기반으로 jwt 토큰 생성
    	TokenDto tokenDto = tokenProvider.generateTokenDto(authentication);
    	System.out.println("tokenDto" + tokenDto);
    	
    	//4. RefreshToken 저장
    	RefreshToken refreshToken = RefreshToken.builder()
                .key(authentication.getName())
                .value(tokenDto.getRefreshToken())
                .build();

        refreshTokenRepository.save(refreshToken);
        
        //5. 토큰 발급
		return tokenDto;
	}

}
