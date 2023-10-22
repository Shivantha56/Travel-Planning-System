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
    long vehicleId;
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

    public VehicleDTO(String vehicleNo, String vehicleBrand, String category, String fuelType, String hybrid, double fuelUsage, byte[] vehicleFrontImage, byte[] vehicleRearImage, byte[] vehicleSideImage, byte[] vehicleFrontInteriorImage, byte[] vehicleRearInteriorImage, int seatCapacity, String vehicleType, String transmissionType, String driverId, String remarks) {
        this.vehicleNo = vehicleNo;
        this.vehicleBrand = vehicleBrand;
        this.category = category;
        this.fuelType = fuelType;
        this.hybrid = hybrid;
        this.fuelUsage = fuelUsage;
        this.vehicleFrontImage = vehicleFrontImage;
        this.vehicleRearImage = vehicleRearImage;
        this.vehicleSideImage = vehicleSideImage;
        this.vehicleFrontInteriorImage = vehicleFrontInteriorImage;
        this.vehicleRearInteriorImage = vehicleRearInteriorImage;
        this.seatCapacity = seatCapacity;
        this.vehicleType = vehicleType;
        this.transmissionType = transmissionType;
        this.driverId = driverId;
        this.remarks = remarks;
    }
}
