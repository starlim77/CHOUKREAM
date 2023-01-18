package com.jwt;

import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import io.jsonwebtoken.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import member.bean.TokenDto;

@RequiredArgsConstructor
@Component
public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
	private final TokenProvider tokenProvider;
	
	public void onAuthenticationSuccess(HttpServletRequest request, 
			HttpServletResponse response, Authentication authentication) throws IOException, ServletException, java.io.IOException {
		OAuth2User oAuth2User = (OAuth2User)authentication.getPrincipal();
		
		System.out.println("oAuth2User = " + oAuth2User);
    	
    	TokenDto tokenDto = tokenProvider.generateTokenDto(authentication);
    	
    	String url = UriComponentsBuilder.fromUriString("http://localhost:3000/oauth2/redirect")
    			.queryParam("accessToken", tokenDto.getAccessToken())
                .queryParam("refreshToken", tokenDto.getRefreshToken())
                .build().toUriString();
    	
    	getRedirectStrategy().sendRedirect(request, response, url);
	}

}
