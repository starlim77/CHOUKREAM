package com.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@ComponentScan( basePackages = {"pay.*", "shop.*", "lookbook.*", "my.*", "csboard.*", "member.*", "com.*", "sms.*"})
@SpringBootApplication
@EntityScan({"*.bean", "*.entity"})
@EnableJpaRepositories("*.dao")
public class FinalProjectApplication {
	
	public static void main(String[] args) {   
		SpringApplication.run(FinalProjectApplication.class, args);
	}
}
