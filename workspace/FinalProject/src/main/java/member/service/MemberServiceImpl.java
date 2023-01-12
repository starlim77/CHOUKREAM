package member.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import member.bean.MemberDto;
import member.dao.MemberDAO;

@Service
public class MemberServiceImpl implements MemberService {

	@Autowired
	private MemberDAO memberDAO;
	
	
	@Override
	public Optional<MemberDto> getMemberInfo(long seq) {
		
		return memberDAO.findById(seq);
	}
	
}
