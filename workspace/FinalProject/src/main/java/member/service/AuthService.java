package member.service;

import member.bean.MemberRequestDto;
import member.bean.MemberResponseDto;
import member.bean.TokenDto;
import member.bean.TokenRequestDto;

public interface AuthService {
	public MemberResponseDto join(MemberRequestDto memberRequestDto);

	public TokenDto login(MemberRequestDto memberRequestDto);
	
	public TokenDto reissue(TokenRequestDto tokenRequestDto);

}
