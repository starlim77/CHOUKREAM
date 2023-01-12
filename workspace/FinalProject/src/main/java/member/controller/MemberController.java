package member.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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
		System.out.println(id);
		return memberService.getMember(id);
	}
	
	@PostMapping(path="updateEmail")
	public Optional<MemberDto> updateEmail(@RequestParam String id, String email) {
		System.out.println(id);
		System.out.println(email);
		return memberService.updateEmail(id, email);
	}

}
