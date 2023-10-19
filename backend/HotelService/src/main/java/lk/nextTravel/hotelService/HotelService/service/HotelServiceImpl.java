package lk.nextTravel.hotelService.HotelService.service;

import lk.nextTravel.hotelService.HotelService.dto.HotelDTO;
import lk.nextTravel.hotelService.HotelService.entity.Hotel;
import lk.nextTravel.hotelService.HotelService.persistence.HotelRepository;
import lk.nextTravel.hotelService.HotelService.util.ModelsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Optional;

@Service
public class HotelServiceImpl implements HotelService{

    @Autowired
    HotelRepository hotelRepository;
    @Autowired
    ModelsMapper modelsMapper;

    @Override
    public void saveHotel(HotelDTO hotelDto,String hotelId) {


        Hotel hotel = modelsMapper.dtoToEntityConversion(hotelDto);
        Hotel hotel1 = new Hotel(hotelId,hotel.getHotelName(),hotel.getStarRate(),hotel.getHotelLocation(),hotel.getHotelLocationLink(),hotel.getHotelContactEmail(),hotel.getContactNoOne(),hotel.getContactNoTwo(),hotel.getPetsAllowedOrNot(),hotel.getHotelFeeOption1(),hotel.getHotelFeeOption2(),hotel.getHotelFeeOption3(),hotel.getHotelFeeOption4(),hotel.getCancellation(),hotel.getRemarks());

        hotelRepository.save(hotel1);
    }

    @Override
    public HotelDTO getHotelSearchDetails(String hotelEmail) {


        Optional<Hotel> hotel = hotelRepository.findByHotelContactEmail(hotelEmail);

        if (hotel.isPresent()){
            String hotelName = hotel.get().getHotelName();
            int starRate = hotel.get().getStarRate();
            String hotelLocation = hotel.get().getHotelLocation();
            String hotelLocationLink = hotel.get().getHotelLocationLink();
            String hotelContactEmail = hotel.get().getHotelContactEmail();
            int contactNoOne = hotel.get().getContactNoOne();
            int contactNoTwo = hotel.get().getContactNoTwo();
            String petsAllowedOrNot = hotel.get().getPetsAllowedOrNot();
            double hotelFeeOption1 = hotel.get().getHotelFeeOption1();
            double hotelFeeOption2 = hotel.get().getHotelFeeOption2();
            double hotelFeeOption3 = hotel.get().getHotelFeeOption3();
            double hotelFeeOption4 = hotel.get().getHotelFeeOption4();
            String cancellation = hotel.get().getCancellation();
            String remarks = hotel.get().getRemarks();

            Hotel hotelDetails = new Hotel(hotelName,starRate,hotelLocation,hotelLocationLink,hotelContactEmail,
                    contactNoOne,contactNoTwo,petsAllowedOrNot,hotelFeeOption1,hotelFeeOption2,hotelFeeOption3,
                    hotelFeeOption4,cancellation,remarks);

            return modelsMapper.entityToDtoConversion(hotelDetails);
        }else {
            throw new RuntimeException("hotel connot found with that email");
        }

    }

    @Override
    public void updateHotel(HotelDTO hotelDto) {
        Optional<Hotel> hotel = hotelRepository.findByHotelContactEmail(hotelDto.getHotelContactEmail());
        if (hotel.isPresent()){
            saveHotel(hotelDto,hotel.get().getHotelId());
        }else {
            throw new RuntimeException("hotel cannot found");
        }


    }

    @Override
    public void deleteHotel(String email) {

        Optional<Hotel> hotel = hotelRepository.findByHotelContactEmail(email);
        if (hotel.isPresent()){
            hotelRepository.deleteByHotelContactEmail(email);
        }else {
            throw new RuntimeException("hotel cannot found");
        }

    }


}
