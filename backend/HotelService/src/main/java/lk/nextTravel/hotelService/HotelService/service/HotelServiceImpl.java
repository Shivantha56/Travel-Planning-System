package lk.nextTravel.hotelService.HotelService.service;

import lk.nextTravel.hotelService.HotelService.dto.HotelDTO;
import lk.nextTravel.hotelService.HotelService.persistence.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HotelServiceImpl implements HotelService{

    @Autowired
    HotelRepository hotelRepository;

    @Override
    public void saveHotel(HotelDTO hotelDto) {
        hotelRepository.save();
    }
}
