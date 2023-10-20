package lk.nextTravel.vehicleService.VehicleService.entity;

import jakarta.persistence.*;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long driverId;
    String driverName;
    String driverContactNo;
    @Lob
    @Column(nullable = false, columnDefinition = "LongText", length = 10000000)
    String driverLicenseFront;
    @Lob
    @Column(nullable = false, columnDefinition = "LongText", length = 10000000)
    String driverLicenseRear;
    String remarks;

}
