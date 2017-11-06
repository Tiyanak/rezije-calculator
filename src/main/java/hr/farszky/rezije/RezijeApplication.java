package hr.farszky.rezije;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAutoConfiguration
public class RezijeApplication {

	public static void main(String[] args) {
		SpringApplication.run(RezijeApplication.class, args);
	}
}
