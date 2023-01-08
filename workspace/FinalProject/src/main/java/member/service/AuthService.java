package member.service;

import member.bean.MemberRequestDto;
import member.bean.MemberResponseDto;

public interface AuthService {
	public MemberResponseDto join(MemberRequestDto memberRequestDto);

}
