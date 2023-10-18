package lk.nextTravel.hotelService.HotelService.util;


import lk.nextTravel.hotelService.HotelService.dto.HotelDTO;
import lk.nextTravel.hotelService.HotelService.entity.Hotel;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ModelsMapper {

    @Autowired
    ModelMapper modelMapper;

    public Hotel dtoToEntityConversion(HotelDTO hotelDTO){
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        return modelMapper.map(hotelDTO , Hotel.class);
    }
    public HotelDTO entityToDtoConversion(Hotel hotel) {
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        return modelMapper.map(hotel, HotelDTO.class);
    }

}
