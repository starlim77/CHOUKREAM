package member.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;
import member.bean.MemberDto;
import member.bean.MemberRequestDto;
import member.bean.MemberResponseDto;
import member.dao.MemberDAO;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final MemberDAO memberDAO;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public MemberResponseDto join(MemberRequestDto memberRequestDto) {
        if (memberDAO.existsByEmail(memberRequestDto.getEmail())) {
            throw new RuntimeException("이미 가입되어 있는 유저입니다");
        }

        MemberDto memberDto = memberRequestDto.toMember(passwordEncoder);
        return MemberResponseDto.of(memberDAO.save(memberDto));
    }

}
