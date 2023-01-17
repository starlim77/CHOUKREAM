package member.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.Random;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.config.SecurityUtil;

import lombok.RequiredArgsConstructor;
import member.bean.MemberDto;
import member.bean.MemberResponseDto;
import member.dao.MemberDAO;

import member.bean.MemberDto;
import member.bean.MemberDto.MemberDtoBuilder;
import member.dao.MemberDAO;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberServiceImpl implements MemberService {
//	private final MemberDAO memberDAO;
//	private final PasswordEncoder passwordEncoder;
	
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

//	@Override
//	public MemberResponseDto changeMemberPassword(String email, String exPassword, String newPassword) {
//		MemberDto memberDto = memberDAO.findById(SecurityUtil.getCurrentMemberId()).orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
//        if (!passwordEncoder.matches(exPassword, memberDto.getPassword())) {
//            throw new RuntimeException("비밀번호가 맞지 않습니다");
//        }
//        memberDto.setPassword(passwordEncoder.encode((newPassword)));
//        return MemberResponseDto.of(memberDAO.save(memberDto));
//	}

	@Autowired
	MemberDAO memberDAO;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public Optional<MemberDto> getMember(Long id) {
		return memberDAO.findById(id);
	}

	@Override
	public Optional<MemberDto> updateEmail(Long id, String email) {
		MemberDto memberDto = memberDAO.findById(id).get();
		memberDto.setEmail(email);
		memberDAO.save(memberDto);
		return memberDAO.findById(id);
	}

	@Override
	public Optional<MemberDto> updatePassword(String email, String password) {
		MemberDto memberDto = memberDAO.findByEmail(email).get();		
		System.out.println(memberDto);
		
		memberDto.setPassword(passwordEncoder.encode(password));
		System.out.println(memberDto);
		memberDAO.save(memberDto);
		return memberDAO.findByEmail(email);
	}

	@Override
	public Optional<MemberDto> updatePhone(String email, String phone) {
		MemberDto memberDto = memberDAO.findByEmail(email).get();
		
		memberDto.setPhone(phone);
		memberDAO.save(memberDto);
		
		return memberDAO.findByEmail(email);
	}

	@Override
	public Optional<MemberDto> updateMarketingOption(String email, String smsOption, String emailOption) {
		MemberDto memberDto = memberDAO.findByEmail(email).get();
		
		memberDto.setSmsOption(Integer.parseInt(smsOption));
		memberDto.setEmailOption(Integer.parseInt(emailOption));
		
		memberDAO.save(memberDto);
		return memberDAO.findByEmail(email);
	}

	@Override
	public String getMemberId(Long memberSeq) {
		String id = memberDAO.findById(memberSeq).get().getEmail().split("@")[0];
		return id;
	}

	
	@Override
	public Optional<MemberDto> getMemberInfo(long seq) {
		System.out.println(memberDAO.findById(seq));
		return memberDAO.findById(seq);
	}
	
}
