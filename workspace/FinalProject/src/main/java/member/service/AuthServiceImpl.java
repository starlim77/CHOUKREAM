package member.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseCookie;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jwt.TokenProvider;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import member.bean.MemberDto;
import member.bean.MemberRequestDto;
import member.bean.MemberResponseDto;
import member.bean.RefreshToken;
import member.bean.TokenDto;
import member.bean.TokenRequestDto;
import member.dao.MemberDAO;
import member.dao.RefreshTokenRepository;
import my.service.MyService;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
	private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final MemberDAO memberDAO;
    private final PasswordEncoder passwordEncoder;
    private final TokenProvider tokenProvider;
    //private final RefreshTokenRepository refreshTokenRepository;
    @Autowired
    private MyService myService;
    
    @Transactional
    public MemberResponseDto join(MemberRequestDto memberRequestDto) {
        if (memberDAO.existsByEmail(memberRequestDto.getEmail())) {
            throw new RuntimeException("이미 가입되어 있는 유저입니다");
        }
        
        MemberDto memberDto = memberRequestDto.toMember(passwordEncoder);
        myService.saveGradeNewMember(memberRequestDto.getEmail());
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
//    	TokenDto tokenDto = tokenProvider.generateTokenDto(authentication);
//    	System.out.println("tokenDto" + tokenDto);
    	
    	//4. RefreshToken 저장
//    	RefreshToken refreshToken = RefreshToken.builder()
//                .key(authentication.getName())
//                .value(tokenDto.getRefreshToken())
//                .build();
    	
        //refreshTokenRepository.save(refreshToken);
         	
        //5. 토큰 발급
		//return tokenDto;
    	return tokenProvider.generateTokenDto(authentication);
	}
    
    @Transactional
    public TokenDto reissue(TokenRequestDto tokenRequestDto) {
        // 1. Refresh Token 검증
        if (!tokenProvider.validateToken(tokenRequestDto.getRefreshToken())) {
            throw new RuntimeException("Refresh Token 이 유효하지 않습니다.");
        }

        // 2. Access Token 에서 Member ID 가져오기
        Authentication authentication = tokenProvider.getAuthentication(tokenRequestDto.getAccessToken());

        // 3. 저장소에서 Member ID 를 기반으로 Refresh Token 값 가져옴
//        RefreshToken refreshToken = refreshTokenRepository.findByKey(authentication.getName())
//                .orElseThrow(() -> new RuntimeException("로그아웃 된 사용자입니다."));
//
//        // 4. Refresh Token 일치하는지 검사
//        if (!refreshToken.getValue().equals(tokenRequestDto.getRefreshToken())) {
//            throw new RuntimeException("토큰의 유저 정보가 일치하지 않습니다.");
//        }

        // 5. 새로운 토큰 생성
        TokenDto tokenDto = tokenProvider.generateTokenDto(authentication);

        // 6. 저장소 정보 업데이트
//        RefreshToken newRefreshToken = refreshToken.updateValue(tokenDto.getRefreshToken());
//        refreshTokenRepository.save(newRefreshToken);

        // 토큰 발급
        return tokenDto;
    }

}
