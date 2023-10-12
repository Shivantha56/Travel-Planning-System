package lk.nextTravel.userService.UserService;


import lk.nextTravel.userService.UserService.entity.User;
import lk.nextTravel.userService.UserService.persistance.UserRepository;
import lombok.NonNull;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoClientDatabaseFactory;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;


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
