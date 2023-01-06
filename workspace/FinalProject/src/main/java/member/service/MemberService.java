package member.service;

import java.util.Optional;

import member.bean.MemberDto;

public interface MemberService {

	public Optional<MemberDto> findEmailByPhone(String phone);

	public Optional<MemberDto> findPWByPhoneEmail(String phone, String email);

}
