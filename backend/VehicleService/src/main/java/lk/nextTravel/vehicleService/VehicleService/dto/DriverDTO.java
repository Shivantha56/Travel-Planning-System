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

    long driverId;
    String driverName;
    int driverContactNo;
    byte[] driverLicenseFront;
    byte[] driverLicenseRear;
    String remarks;


    public DriverDTO(String driverName, int driverContactNo, byte[] driverLicenseFront, byte[] driverLicenseRear, String remarks) {
        this.driverName = driverName;
        this.driverContactNo = driverContactNo;
        this.driverLicenseFront = driverLicenseFront;
        this.driverLicenseRear = driverLicenseRear;
        this.remarks = remarks;
    }

    public DriverDTO(long driverId) {
        this.driverId = driverId;
    }
}
