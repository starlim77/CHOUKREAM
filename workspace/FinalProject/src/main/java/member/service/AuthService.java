package member.service;

import jakarta.servlet.http.HttpServletResponse;
import member.bean.MemberRequestDto;
import member.bean.MemberResponseDto;
import member.bean.TokenDto;

public interface AuthService {
	public MemberResponseDto join(MemberRequestDto memberRequestDto);

	public TokenDto login(MemberRequestDto memberRequestDto);

}
