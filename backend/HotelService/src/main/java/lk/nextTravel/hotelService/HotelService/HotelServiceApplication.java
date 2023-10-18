package lk.nextTravel.hotelService.HotelService;

import lk.nextTravel.hotelService.HotelService.util.ModelsMapper;
import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class HotelServiceApplication {

	@Bean
	public ModelMapper getModelMapper(){
		return new ModelMapper();
	}
	public static void main(String[] args) {
		SpringApplication.run(HotelServiceApplication.class, args);
	}

}
