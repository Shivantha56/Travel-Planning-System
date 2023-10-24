package lk.nextTravel.vehicleService.VehicleService.dto;

import lk.nextTravel.vehicleService.VehicleService.entity.Driver;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class DriverVehicleDTO {
    long driverId;
    String driverName;
    String driverContactNo;


    long vehicleId;
    String vehicleNo;
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
//    Driver driverAssignDriver;
    String remarks;


    public DriverVehicleDTO(long driverId, String driverName, String driverContactNo, long vehicleId, String vehicleNo, String vehicleBrand, String category, String fuelType, String hybrid, double fuelUsage, int seatCapacity, String vehicleType, String transmissionType, String remarks) {
        this.driverId = driverId;
        this.driverName = driverName;
        this.driverContactNo = driverContactNo;
        this.vehicleId = vehicleId;
        this.vehicleNo = vehicleNo;
        this.vehicleBrand = vehicleBrand;
        this.category = category;
        this.fuelType = fuelType;
        this.hybrid = hybrid;
        this.fuelUsage = fuelUsage;
        this.seatCapacity = seatCapacity;
        this.vehicleType = vehicleType;
        this.transmissionType = transmissionType;
        this.remarks = remarks;
    }
}
