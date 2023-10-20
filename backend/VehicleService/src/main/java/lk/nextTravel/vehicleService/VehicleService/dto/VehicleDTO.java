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

    String vehicleId;
    String vehicleBrand;
    String category;
    String fuelType;
    String hybrid;
    double fuelUsage;
    String vehicleFrontImage;
    String vehicleRearImage;
    String vehicleSideImage;
    String vehicleFrontInteriorImage;
    String vehicleRearInteriorImage;
    int seatCapacity;
    String vehicleType;
    String transmissionType;
    String driverId;
}
