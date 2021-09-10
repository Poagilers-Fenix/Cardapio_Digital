package br.com.fiap.cardapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class CardappApplication {

	public static void main(String[] args) {
		SpringApplication.run(CardappApplication.class, args);
	}

}
