package member.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import member.bean.MemberDto;
import lombok.RequiredArgsConstructor;
import member.bean.ChangePasswordRequestDto;
import member.bean.MemberDto;
import member.bean.MemberResponseDto;
import member.service.MemberService;
import sms.service.SmsService;

@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
@RestController
public class MemberController {
//	private final MemberService memberService;
	
	@Autowired
	private MemberService memberService;
	
	private final SmsService smsService;
	
	@PostMapping(path="certifications")
	public void certifications(@RequestBody String imp_uid) {
		System.out.println(imp_uid);
		System.out.println("본인 인증 성공");
	}
	
	@GetMapping(path="getMember")
	public Optional<MemberDto> getMember(@RequestParam Long id) {
		return memberService.getMember(id);
	}
	
	@PostMapping(path="updateEmail")
	public Optional<MemberDto> updateEmail(@RequestParam Long id, String email) {
		return memberService.updateEmail(id, email);
	}
	@GetMapping(path="findEmail")
	public Optional<MemberDto> findEmailByPhone(@RequestParam String phone) { 
		return memberService.findEmailByPhone(phone);
	}
	
	@GetMapping(path="tempPassword")
	public String findPasswordByPhoneAndEmail(@RequestParam String phone, @RequestParam String email) {
		return memberService.findPasswordByPhoneAndEmail(phone,email);
	}
	
	@GetMapping(path="my")
    public ResponseEntity<MemberResponseDto> getMyMemberInfo() {
        MemberResponseDto myInfoBySecurity = memberService.getMyInfoBySecurity();
        System.out.println(myInfoBySecurity.getEmail());
        return ResponseEntity.ok((myInfoBySecurity));
    }
	
	@GetMapping(path="sendSms")
	public void sendSms(@RequestParam String phone, @RequestParam String content) {
		smsService.sendSms(phone, content);
	}
	
	@GetMapping(path="isExistEmail")
	public String isExistEmail(@RequestParam String email) {
		return memberService.findByEmailAndProviderIsNull(email);
	}

	@GetMapping(path = "getMemberInfo")
	public Optional<MemberDto> getMemberInfo(@RequestParam long seq) {
		
		return memberService.getMemberInfo(seq);
	}
	
	@PostMapping(path = "updatePassword")
	public Optional<MemberDto> updatePassword(@RequestParam String email, String password) {
		
		return memberService.updatePassword(email, password);
	}
	
	@PostMapping(path = "updatePhone")
	public Optional<MemberDto> updatePhone(@RequestParam String email, String phone) {
		
		return memberService.updatePhone(email, phone);
	}
	
	@PostMapping(path = "updateMarketingOption")
	public Optional<MemberDto> updateMarketingOption(@RequestParam String email, String smsOption, String emailOption) {
		
		return memberService.updateMarketingOption(email, smsOption, emailOption);
	}
}
