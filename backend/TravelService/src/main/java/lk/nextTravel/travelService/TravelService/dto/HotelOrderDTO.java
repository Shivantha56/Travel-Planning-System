package lk.nextTravel.travelService.TravelService.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class HotelOrderDTO {

    String hotelId;
    String hotelName;
    double hotelFeeOption1;
    double hotelFeeOption2;
    double hotelFeeOption3;
    double hotelFeeOption4;
    int starRate;



}
