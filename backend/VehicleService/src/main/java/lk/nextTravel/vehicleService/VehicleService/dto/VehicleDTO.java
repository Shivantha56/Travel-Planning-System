package lk.nextTravel.vehicleService.VehicleService.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
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
    @NotNull
    String vehicleNo;
    @NotNull
    String vehicleBrand;
    @NotNull
    String category;
    @NotNull
    String fuelType;
    @NotNull
    String hybrid;
    @Size(min = 1)
            @Pattern(regexp = "^[0-9]+$")
    double fuelUsage;
    byte[] vehicleFrontImage;
    byte[] vehicleRearImage;
    byte[] vehicleSideImage;
    byte[] vehicleFrontInteriorImage;
    byte[] vehicleRearInteriorImage;
    @Size(min = 1)
    @Pattern(regexp = "^[0-9]+$")
    int seatCapacity;
    @Size(min = 1)
    @Pattern(regexp = "^[0-9]+$")
    String vehicleType;
    String transmissionType;
    String driverId;
    String remarks;
    double vehiclePrice;

    public VehicleDTO(@NotNull String vehicleNo, @NotNull String vehicleBrand, @NotNull String category, @NotNull String fuelType, @NotNull String hybrid, double fuelUsage, byte[] vehicleFrontImage, byte[] vehicleRearImage, byte[] vehicleSideImage, byte[] vehicleFrontInteriorImage, byte[] vehicleRearInteriorImage, int seatCapacity, String vehicleType, String transmissionType, String driverId, String remarks, double vehiclePrice) {
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
        this.vehiclePrice = vehiclePrice;
    }
}
