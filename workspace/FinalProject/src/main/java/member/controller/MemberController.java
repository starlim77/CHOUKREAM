package member.controller;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import member.bean.ChangePasswordRequestDto;
import member.bean.MemberDto;
import member.bean.MemberResponseDto;
import member.service.MemberService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MemberController {
	
	@PostMapping(path="certifications")
	public void certifications(@RequestBody String imp_uid) {
		System.out.println(imp_uid);
		System.out.println("본인 인증 성공");
	}
	
	@GetMapping(path="findEmail")
	public Optional<MemberDto> findEmailByPhone(@RequestParam String phone) { 
		return memberService.findEmailByPhone(phone);
	}
	
	@GetMapping(path="tempPassword")
	public String findPasswordByPhoneAndEmail(@RequestParam String phone, @RequestParam String email) {
		return memberService.findPasswordByPhoneAndEmail(phone,email);
	}
	
	@PostMapping(path="changePassword")
    public ResponseEntity<MemberResponseDto> setMemberPassword(@RequestBody ChangePasswordRequestDto request) {
        return ResponseEntity.ok(memberService.changeMemberPassword(request.getEmail() ,request.getExPassword(), request.getNewPassword()));
    }

}
