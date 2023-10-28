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
    String hotelId;
    String guideId;
    String orderDate;
    String packageCategory;
    String startDate;
    String endDate;
    int countDays;
    int countNights;
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

    public OrderDetailsDTO(String userId, String vehicleId, String hotelId, String guideId, String packageCategory, String startDate, String endDate, int countDays, int countNights, String travelArea, int noOfAdults, int noOfChildren, String withPetsOrNot, String needGuideOrNO) {
        this.userId = userId;
        this.vehicleId = vehicleId;
        this.hotelId = hotelId;
        this.guideId = guideId;
        this.packageCategory = packageCategory;
        this.startDate = startDate;
        this.endDate = endDate;
        this.countDays = countDays;
        this.countNights = countNights;
        this.travelArea = travelArea;
        this.noOfAdults = noOfAdults;
        this.noOfChildren = noOfChildren;
        this.withPetsOrNot = withPetsOrNot;
        this.needGuideOrNO = needGuideOrNO;
    }
}
