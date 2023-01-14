package member.service;

import java.util.Optional;


import member.bean.MemberDto;

public interface MemberService {

	Optional<MemberDto> getMember(String id);

	Optional<MemberDto> updateEmail(String id, String email);

	Optional<MemberDto> updatePassword(String email, String password);

	Optional<MemberDto> updatePhone(String email, String phone);

	Optional<MemberDto> updateMarketingOption(String email, String smsOption, String emailOption);

}
