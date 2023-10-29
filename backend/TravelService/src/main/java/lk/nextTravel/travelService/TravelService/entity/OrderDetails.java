package lk.nextTravel.travelService.TravelService.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jdk.jfr.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class OrderDetails {

    @Id
            @GeneratedValue(strategy = GenerationType.AUTO)
    int orderId;
    String userId;
    @Timestamp
    String orderDate;
    String packageCategory;
    String startDate;
    String endDate;
    String countDays;
    String countNights;
    String travelArea;
    int noOfAdults;
    int noOfChildren;
    int totalHeadCount;
    String withPetsOrNot;
    String needGuideOrNO;
    double totalHotelValue;
    double totalGuideFee;
    double totalVehicleFee;
    double totalValue;
    String remarks;
}
