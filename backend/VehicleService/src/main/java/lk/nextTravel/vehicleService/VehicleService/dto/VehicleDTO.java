package lk.nextTravel.vehicleService.VehicleService.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class VehicleDTO {

//    String vehicleId;
    String vehicleNo;
    String vehicleBrand;
    String category;
    String fuelType;
    String hybrid;
    double fuelUsage;
    byte[] vehicleFrontImage;
    byte[] vehicleRearImage;
    byte[] vehicleSideImage;
    byte[] vehicleFrontInteriorImage;
    byte[] vehicleRearInteriorImage;
    int seatCapacity;
    String vehicleType;
    String transmissionType;
    String driverId;
    String remarks;
}
