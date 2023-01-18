package member.service;

import java.util.Optional;


import member.bean.MemberDto;

import member.bean.MemberResponseDto;

public interface MemberService {
	
	public MemberResponseDto getMyInfoBySecurity();

	Optional<MemberDto> getMember(Long id);

	Optional<MemberDto> updateEmail(Long id, String email);

	Optional<MemberDto> updatePassword(String email, String password);

	Optional<MemberDto> updatePhone(String email, String phone);

	Optional<MemberDto> updateMarketingOption(String email, String smsOption, String emailOption);

	public Optional<MemberDto> findEmailByPhone(String phone);

	public String findPasswordByPhoneAndEmail(String phone, String email);

	String getMemberId(Long memberSeq);
	
//	public MemberResponseDto changeMemberPassword(String email, String exPassword, String newPassword);

	public Optional<MemberDto> getMemberInfo(long seq);

	public String findByEmailAndProviderIsNull(String email);
	
}
