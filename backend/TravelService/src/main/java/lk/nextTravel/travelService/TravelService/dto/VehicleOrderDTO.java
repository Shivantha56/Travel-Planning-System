package lk.nextTravel.travelService.TravelService.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class VehicleOrderDTO {

    String vehicleId;
    String vehicleName;
    String driverId;
    String driverName;
    double vehiclePrice;

}
