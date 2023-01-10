package member.service;

import java.util.Optional;
import java.util.Random;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberServiceImpl implements MemberService {
	private final MemberDAO memberDAO;
	private final PasswordEncoder passwordEncoder;
	
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
	public String findPasswordByPhoneAndEmail(String phone, String email) {
		MemberDto memberDto = memberDAO.findPasswordByPhoneAndEmail(phone, email);
		
		if(memberDto != null) {
			String tempPassword = new GenerateTempPassword().excuteGenerate();
			
			memberDto.setPassword(passwordEncoder.encode((tempPassword))); 
			memberDAO.save(memberDto);
			
			return tempPassword;
		} else {
			return "non_exist";
		}
		
	}

	@Override
	public MemberResponseDto changeMemberPassword(String email, String exPassword, String newPassword) {
		MemberDto memberDto = memberDAO.findById(SecurityUtil.getCurrentMemberId()).orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
        if (!passwordEncoder.matches(exPassword, memberDto.getPassword())) {
            throw new RuntimeException("비밀번호가 맞지 않습니다");
        }
        memberDto.setPassword(passwordEncoder.encode((newPassword)));
        return MemberResponseDto.of(memberDAO.save(memberDto));
	}
public class MemberServiceImpl implements MemberService {

}
