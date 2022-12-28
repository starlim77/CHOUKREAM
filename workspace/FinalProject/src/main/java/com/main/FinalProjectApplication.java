package com.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@ComponentScan(basePackages = {"com.main","style.*"} )
@EntityScan("style.bean")
@EnableJpaRepositories("style.dao")
@SpringBootApplication
public class FinalProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(FinalProjectApplication.class, args);
	}

}
