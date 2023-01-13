package member.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import member.bean.MemberDto;
import member.bean.MemberDto.MemberDtoBuilder;
import member.dao.MemberDAO;

@Service
public class MemberServiceImpl implements MemberService {

	@Autowired
	MemberDAO memberDAO;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public Optional<MemberDto> getMember(String id) {
		return memberDAO.findById(id);
	}

	@Override
	public Optional<MemberDto> updateEmail(String id, String email) {
		MemberDto memberDto = memberDAO.findById(id).get();
		memberDto.setEmail(email);
		memberDAO.save(memberDto);
		return memberDAO.findById(id);
	}

//	@Override
//	public Optional<MemberDto> updatePassword(String email, String password) {
//		
//
//
//		return Optional.empty();
//	}

	@Override
	public Optional<MemberDto> updatePassword(String email, String password) {
		MemberDto memberDto = memberDAO.findByEmail(email).get();		
		System.out.println(memberDto);
		
		memberDto.setPassword(passwordEncoder.encode(password));
		System.out.println(memberDto);
		memberDAO.save(memberDto);
		return memberDAO.findByEmail(email);
	}

}
