package lk.nextTravel.vehicleService.VehicleService.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class DriverDTO {

    String driverId;
    String driverName;
    String driverContactNo;
    String driverLicenseFront;
    String driverLicenseRear;
    String remarks;

}
