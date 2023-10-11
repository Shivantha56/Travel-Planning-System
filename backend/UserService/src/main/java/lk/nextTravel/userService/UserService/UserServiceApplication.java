package lk.nextTravel.userService.UserService;


import lk.nextTravel.userService.UserService.entity.User;
import lk.nextTravel.userService.UserService.persistance.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class UserServiceApplication {

	@Bean
	public ModelMapper getModelMapper(){
		return new ModelMapper();
	}

	public static void main(String[] args) {
		SpringApplication.run(UserServiceApplication.class, args);
	}

}
