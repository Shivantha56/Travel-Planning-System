package lk.nextTravel.hotelService.HotelService.entity;


import lombok.*;
import org.springframework.data.annotation.Id;

//@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class Hotel {

    @Id
    String hotelId;
    String hotelName;
    int starRate;
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

    public Hotel(String hotelName, int starRate, String hotelLocation, String hotelLocationLink, String hotelContactEmail, int contactNoOne, int contactNoTwo, String petsAllowedOrNot, double hotelFeeOption1, double hotelFeeOption2, double hotelFeeOption3, double hotelFeeOption4, String cancellation, String remarks) {
        this.hotelName = hotelName;
        this.starRate = starRate;
        this.hotelLocation = hotelLocation;
        this.hotelLocationLink = hotelLocationLink;
        this.hotelContactEmail = hotelContactEmail;
        this.contactNoOne = contactNoOne;
        this.contactNoTwo = contactNoTwo;
        this.petsAllowedOrNot = petsAllowedOrNot;
        this.hotelFeeOption1 = hotelFeeOption1;
        this.hotelFeeOption2 = hotelFeeOption2;
        this.hotelFeeOption3 = hotelFeeOption3;
        this.hotelFeeOption4 = hotelFeeOption4;
        this.cancellation = cancellation;
        this.remarks = remarks;
    }
}
