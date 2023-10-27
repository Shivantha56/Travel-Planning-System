package lk.nextTravel.travelService.TravelService.dto;


import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class OrderDetailsDTO {

    String orderId;
    String userId;
    String vehicleId;
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
