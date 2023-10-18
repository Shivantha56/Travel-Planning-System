package lk.nextTravel.hotelService.HotelService.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class HotelDTO {

    String hotelName;
    int starRate;
    String category;
    String hotelLocation;
    String hotelLocationLink;
    String hotelContactEmail;
    int contactNoOne;
    int contactNoTwo;
    String petsAllowedOrNot;
    double hotelFeeOption1;
    double hotelFeeOption2;
    double hotelFeeOption3;
    double hotelFeeOption4;
    String cancellation;
    String remarks;
}
