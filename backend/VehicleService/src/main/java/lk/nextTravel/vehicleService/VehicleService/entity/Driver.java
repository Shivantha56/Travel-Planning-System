package lk.nextTravel.vehicleService.VehicleService.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Driver {
    @Id
    String driverId;
    String driverName;
    String driverContactNo;
    String driverLicenseFront;
    String driverLicenseRear;
    String remarks;

}
