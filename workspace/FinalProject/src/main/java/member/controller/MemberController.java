package member.controller;

import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import member.bean.MemberDto;
import member.service.MemberService;

@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
@RestController
public class MemberController {
	private final MemberService memberService;
	
	@PostMapping(path="certifications")
	public void certifications(@RequestBody String imp_uid) {
		System.out.println(imp_uid);
		System.out.println("본인 인증 성공");
	}
	
	@GetMapping(path="findEmail")
	public Optional<MemberDto> findEmailByPhone(@RequestParam String phone) { 
		return memberService.findEmailByPhone(phone);
	}
	
	@GetMapping(path="sendSms")
	public String findPWByPhoneEmail(@RequestParam String phone, @RequestParam String email) {
		Optional<MemberDto> memberDto = memberService.findPWByPhoneEmail(phone,email);
		return null;
	}

}
