package lk.nextTravel.hotelService.HotelService.service;

import lk.nextTravel.hotelService.HotelService.dto.HotelDTO;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public interface HotelService {
    void saveHotel(HotelDTO hotelDto,String hotelId);

    HotelDTO getHotelSearchDetails(String hotelEmail);

    void updateHotel(HotelDTO hotelDto);

    void deleteHotel(String email);

    List<HotelDTO> getAllHotelData();
}
