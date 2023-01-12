package member.service;

import java.util.Optional;

import member.bean.MemberDto;

public interface MemberService {

	public Optional<MemberDto> getMemberInfo(long seq);

}
