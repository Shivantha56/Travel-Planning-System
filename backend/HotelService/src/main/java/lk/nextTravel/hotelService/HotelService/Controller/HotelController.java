package lk.nextTravel.hotelService.HotelService.Controller;

import lk.nextTravel.hotelService.HotelService.dto.HotelDTO;
import lk.nextTravel.hotelService.HotelService.entity.Hotel;
import lk.nextTravel.hotelService.HotelService.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/hotel")
public class HotelController {

    @Autowired
    HotelService hotelService;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public void save(
           @RequestPart String hotelName,
           @RequestPart String starRate,
           @RequestPart String hotelLocation,
           @RequestPart String hotelLocationLink,
           @RequestPart String hotelContactEmail,
           @RequestPart String contactNoOne,
           @RequestPart String contactNoTwo,
           @RequestPart String petsAllowedOrNot,
           @RequestPart String hotelFeeOption1,
           @RequestPart String hotelFeeOption2,
           @RequestPart String hotelFeeOption3,
           @RequestPart String hotelFeeOption4,
           @RequestPart String cancellation,
           @RequestPart String remarks
    ) {

        HotelDTO hotelDto = new HotelDTO(hotelName,Integer.parseInt(starRate),hotelLocation,hotelLocationLink,
                hotelContactEmail,Integer.parseInt(contactNoOne),Integer.parseInt(contactNoTwo),petsAllowedOrNot,Double.parseDouble(hotelFeeOption1),
                Double.parseDouble(hotelFeeOption2),Double.parseDouble(hotelFeeOption3),Double.parseDouble(hotelFeeOption4),cancellation,remarks);
        hotelService.saveHotel(hotelDto);

    }


}
