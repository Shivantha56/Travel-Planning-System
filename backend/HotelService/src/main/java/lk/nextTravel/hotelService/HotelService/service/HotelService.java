package lk.nextTravel.hotelService.HotelService.service;

import lk.nextTravel.hotelService.HotelService.dto.HotelDTO;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.stereotype.Controller;

@Controller
public interface HotelService {
    void saveHotel(HotelDTO hotelDto);

}