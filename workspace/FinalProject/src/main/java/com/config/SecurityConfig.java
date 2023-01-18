package com.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Component;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.jwt.JwtAccessDeniedHandler;
import com.jwt.JwtAuthenticationEntryPoint;
import com.jwt.JwtFilter;
import com.jwt.OAuth2SuccessHandler;
import com.jwt.TokenProvider;

import lombok.RequiredArgsConstructor;
import member.service.CustomOAuth2UserService;

@RequiredArgsConstructor
@Configuration
@EnableWebSecurity
@Component
public class SecurityConfig {
	private final TokenProvider tokenProvider;
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtAccessDeniedHandler jwtAccessDeniedHandler;
    private final CustomOAuth2UserService oAuth2UserService;
    private final OAuth2SuccessHandler oAuth2SuccessHandler;
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .cors().configurationSource(configurationSource())
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)

                .and()
                .exceptionHandling()
                .authenticationEntryPoint(jwtAuthenticationEntryPoint)
                .accessDeniedHandler(jwtAccessDeniedHandler)

                //페이지 권한 추후 설정
                .and()
                .authorizeHttpRequests()
                .requestMatchers("/", "/**").permitAll()
                
                .and() 
                .addFilterBefore(new JwtFilter(tokenProvider), UsernamePasswordAuthenticationFilter.class)
                .oauth2Login()
                .successHandler(oAuth2SuccessHandler)
                .userInfoEndpoint()
                .userService(oAuth2UserService);
                //.and()
                //.apply(new JwtSecurityConfig(tokenProvider));

        return http.build();
    }
    
    public CorsConfigurationSource configurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.addAllowedHeader("*");
        configuration.addAllowedMethod("*"); // GET, POST, PUT, DELETE (Javascript 요청 허용)
        configuration.addAllowedOriginPattern("*"); // 모든 IP 주소 허용 (프론트 앤드 IP만 허용 react)
        configuration.setAllowCredentials(true); // 클라이언트에서 쿠키 요청 허용

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

}
