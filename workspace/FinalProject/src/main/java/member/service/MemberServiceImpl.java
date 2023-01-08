package member.service;

import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.config.SecurityUtil;

import lombok.RequiredArgsConstructor;
import member.bean.MemberDto;
import member.bean.MemberResponseDto;
import member.dao.MemberDAO;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberServiceImpl implements MemberService {
	private final MemberDAO memberDAO;
	
	public MemberResponseDto getMyInfoBySecurity() {
        return memberDAO.findById(SecurityUtil.getCurrentMemberId())
                .map(MemberResponseDto::of)
                .orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
    }

    public MemberResponseDto findMemberInfoByEmail(String email) {
        return memberDAO.findByEmail(email)
                .map(MemberResponseDto::of)
                .orElseThrow(() -> new RuntimeException("유저 정보가 없습니다."));
    }

	@Override
	public Optional<MemberDto> findEmailByPhone(String phone) {
		return memberDAO.findEmailByPhone(phone);
	}

	@Override
	public Optional<MemberDto> findPWByPhoneEmail(String phone, String email) {
		return memberDAO.findPWByPhoneEmail(phone, email);
		
	} 

}
