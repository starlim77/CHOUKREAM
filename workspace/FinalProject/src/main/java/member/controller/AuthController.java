package member.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import member.bean.MemberRequestDto;
import member.bean.MemberResponseDto;
import member.bean.TokenDto;
import member.bean.TokenRequestDto;
import member.service.AuthService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
public class AuthController {
	@Autowired
	private AuthService authService;
	
	@PostMapping("/join")
	public ResponseEntity<MemberResponseDto> join(@RequestBody MemberRequestDto memberRequestDto) {
		System.out.println(memberRequestDto);
        return ResponseEntity.ok(authService.join(memberRequestDto));
    }
	
	@PostMapping("/login")
	public ResponseEntity<TokenDto> login(@RequestBody MemberRequestDto memberRequestDto) {
		System.out.println(memberRequestDto);
		return ResponseEntity.ok(authService.login(memberRequestDto));
	}
	
	@PostMapping("/reissue")
    public ResponseEntity<TokenDto> reissue(@RequestBody TokenRequestDto tokenRequestDto) {
        return ResponseEntity.ok(authService.reissue(tokenRequestDto));
    }

}
