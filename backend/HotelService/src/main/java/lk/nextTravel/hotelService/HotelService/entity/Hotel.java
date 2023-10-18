package lk.nextTravel.hotelService.HotelService.entity;


import lombok.*;
import org.springframework.data.annotation.Id;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class Hotel {

    @Id
    String hotelId;
    String hotelName;
    int starRate;
    String category;
    String hotelLocation;
    String hotelLocationLink;
    String hotelContactEmail;
    int contactNoOne;
    int contactNoTwo;
    String petsAllowedOrNot;
    String hotelFeeOption1;
    String hotelFeeOption2;
    String hotelFeeOption3;
    String hotelFeeOption4;
    String cancellation;
    String remarks;



}
