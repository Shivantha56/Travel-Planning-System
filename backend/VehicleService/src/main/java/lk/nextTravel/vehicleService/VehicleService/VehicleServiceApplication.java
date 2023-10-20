package lk.nextTravel.vehicleService.VehicleService;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class VehicleServiceApplication {


	@Bean
	public ModelMapper getModeMapper(){
		return new ModelMapper();
	}

	public static void main(String[] args) {
		SpringApplication.run(VehicleServiceApplication.class, args);
	}

}
