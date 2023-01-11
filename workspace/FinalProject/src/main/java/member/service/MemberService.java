package member.service;

import java.util.Optional;

import member.bean.MemberDto;
import member.bean.MemberResponseDto;

public interface MemberService {

	public Optional<MemberDto> findEmailByPhone(String phone);

	public String findPasswordByPhoneAndEmail(String phone, String email);
	
	public MemberResponseDto changeMemberPassword(String email, String exPassword, String newPassword);

}
