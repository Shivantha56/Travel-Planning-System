package lk.nextTravel.hotelService.HotelService.service;

import lk.nextTravel.hotelService.HotelService.dto.HotelDTO;
import lk.nextTravel.hotelService.HotelService.entity.Hotel;
import lk.nextTravel.hotelService.HotelService.persistence.HotelRepository;
import lk.nextTravel.hotelService.HotelService.util.ModelsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HotelServiceImpl implements HotelService{

    @Autowired
    HotelRepository hotelRepository;
    @Autowired
    ModelsMapper modelsMapper;

    @Override
    public void saveHotel(HotelDTO hotelDto) {



        Hotel hotel = modelsMapper.dtoToEntityConversion(hotelDto);
        Hotel hotel1 = new Hotel(hotel.getHotelName(),hotel.getStarRate(),hotel.getCategory(),hotel.getHotelLocation(),hotel.getHotelLocationLink(),hotel.getHotelContactEmail(),hotel.getContactNoOne(),hotel.getContactNoTwo(),hotel.getPetsAllowedOrNot(),hotel.getHotelFeeOption1(),hotel.getHotelFeeOption2(),hotel.getHotelFeeOption3(),hotel.getHotelFeeOption4(),hotel.getCancellation(),hotel.getRemarks());

        hotelRepository.save(hotel1);
    }
}
