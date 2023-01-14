package member.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import member.bean.MemberDto;
import member.service.MemberService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MemberController {
	
	@Autowired
	private MemberService memberService;
	
	@PostMapping(path="certifications")
	public void certifications(@RequestBody String imp_uid) {
		System.out.println(imp_uid);
		System.out.println("본인 인증 성공");
	}
	
	@GetMapping(path="getMember")
	public Optional<MemberDto> getMember(@RequestParam String id) {
		return memberService.getMember(id);
	}
	
	@PostMapping(path="updateEmail")
	public Optional<MemberDto> updateEmail(@RequestParam String id, String email) {
		return memberService.updateEmail(id, email);
	}

	@PostMapping(path = "updatePassword")
	public Optional<MemberDto> updatePassword(@RequestParam String email, String password) {
		
		System.out.println(email);
		System.out.println(password);
		return memberService.updatePassword(email, password);
	}
	
	@PostMapping(path = "updatePhone")
	public Optional<MemberDto> updatePhone(@RequestParam String email, String phone) {
		
		System.out.println(email);
		System.out.println(phone);
		return memberService.updatePhone(email, phone);
	}
	
	@PostMapping(path = "updateMarketingOption")
	public Optional<MemberDto> updateMarketingOption(@RequestParam String email, String smsOption, String emailOption) {
		
		System.out.println("smsOption = " + smsOption);
		System.out.println("emailOption = " + emailOption);
		return memberService.updateMarketingOption(email, smsOption, emailOption);
	}
}
