package member.service;

import java.util.Optional;

import member.bean.MemberDto;

public interface MemberService {

	Optional<MemberDto> getMember(String id);

	Optional<MemberDto> updateEmail(String id, String email);

}
