package lk.nextTravel.vehicleService.VehicleService.entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
//@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long vehicleId;
    String vehicleNo;
    String vehicleBrand;
    String category;
    String fuelType;
    String hybrid;
    double fuelUsage;
    @Lob
    @Column(nullable = false, columnDefinition = "LongText", length = 10000000)
    String vehicleFrontImage;
    @Lob
    @Column(nullable = false, columnDefinition = "LongText", length = 10000000)
    String vehicleRearImage;
    @Lob
    @Column(nullable = false, columnDefinition = "LongText", length = 10000000)
    String vehicleSideImage;
    @Lob
    @Column(nullable = false, columnDefinition = "LongText", length = 10000000)
    String vehicleFrontInteriorImage;
    @Lob
    @Column(nullable = false, columnDefinition = "LongText", length = 10000000)
    String vehicleRearInteriorImage;
    int seatCapacity;
    String vehicleType;
    String transmissionType;
    @OneToOne
    @JoinColumn(name = "driverId")
    Driver driver;

    public Vehicle(String vehicleNo, String vehicleBrand, String category, String fuelType, String hybrid, double fuelUsage, String vehicleFrontImage, String vehicleRearImage, String vehicleSideImage, String vehicleFrontInteriorImage, String vehicleRearInteriorImage, int seatCapacity, String vehicleType, String transmissionType, Driver driver) {
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
        this.driver = driver;
    }

    //    public Vehicle(String vehicleNo, String vehicleBrand, String category, String fuelType, String hybrid, double fuelUsage, String vehicleFrontImage, String vehicleRearImage, String vehicleSideImage, String vehicleFrontInteriorImage, String vehicleRearInteriorImage, int seatCapacity, String vehicleType, String transmissionType, Driver driver) {
//        this.vehicleNo = vehicleNo;
//        this.vehicleBrand = vehicleBrand;
//        this.category = category;
//        this.fuelType = fuelType;
//        this.hybrid = hybrid;
//        this.fuelUsage = fuelUsage;
//        this.vehicleFrontImage = vehicleFrontImage;
//        this.vehicleRearImage = vehicleRearImage;
//        this.vehicleSideImage = vehicleSideImage;
//        this.vehicleFrontInteriorImage = vehicleFrontInteriorImage;
//        this.vehicleRearInteriorImage = vehicleRearInteriorImage;
//        this.seatCapacity = seatCapacity;
//        this.vehicleType = vehicleType;
//        this.transmissionType = transmissionType;
//        this.driver = driver;
//
//    }
}
