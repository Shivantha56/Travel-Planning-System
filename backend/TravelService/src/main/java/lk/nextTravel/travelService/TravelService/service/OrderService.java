package lk.nextTravel.travelService.TravelService.service;

import lk.nextTravel.travelService.TravelService.dto.GuideOrderDTO;
import lk.nextTravel.travelService.TravelService.dto.HotelOrderDTO;
import lk.nextTravel.travelService.TravelService.dto.OrderDetailsDTO;
import lk.nextTravel.travelService.TravelService.dto.VehicleOrderDTO;
import org.springframework.stereotype.Service;

@Service
public interface OrderService {

    String generateOrderId();

    void saveOrder(OrderDetailsDTO orderDetailsDTO);

    void getVehicleDetails(VehicleOrderDTO vehicleOrderDTO,String vehicleId);

    void getHotelDetails(HotelOrderDTO block, String hotelId);

    void getGuideDetails(GuideOrderDTO block, String guideId);
//    String generateOrderIds();

}
