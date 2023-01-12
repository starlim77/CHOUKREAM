package member.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import member.bean.MemberDto;
import member.dao.MemberDAO;

@Service
public class MemberServiceImpl implements MemberService {

	@Autowired
	MemberDAO memberDAO;
	
	@Override
	public Optional<MemberDto> getMember(String id) {
		return memberDAO.findById(id);
	}

	@Override
	public Optional<MemberDto> updateEmail(String id, String email) {
		System.out.println("updateEmail");
		MemberDto memberDto = memberDAO.findById(id).get();
		memberDto.setEmail(email);
		memberDAO.save(memberDto);
		return memberDAO.findById(id);
	}

}
