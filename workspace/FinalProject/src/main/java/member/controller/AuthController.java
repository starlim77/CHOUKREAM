package member.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import member.bean.MemberRequestDto;
import member.bean.MemberResponseDto;
import member.service.AuthService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
public class AuthController {
	private AuthService authService;
	
	@PostMapping("/join")
	public ResponseEntity<MemberResponseDto> join(@RequestBody MemberRequestDto memberRequestDto) {
        return ResponseEntity.ok(authService.join(memberRequestDto));
    }

}
