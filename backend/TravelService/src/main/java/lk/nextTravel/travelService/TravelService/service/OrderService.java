package lk.nextTravel.travelService.TravelService.service;

import lk.nextTravel.travelService.TravelService.dto.GuideOrderDTO;
import lk.nextTravel.travelService.TravelService.dto.HotelOrderDTO;
import lk.nextTravel.travelService.TravelService.dto.OrderDetailsDTO;
import lk.nextTravel.travelService.TravelService.dto.VehicleOrderDTO;
import org.springframework.stereotype.Service;

@Service
public interface OrderService {

    String generateOrderId();

    void saveOrder(OrderDetailsDTO orderDetailsDTO, VehicleOrderDTO vehicleOrderDTO, HotelOrderDTO hotelOrderDTO, GuideOrderDTO guideOrderDTO);

    VehicleOrderDTO getVehicleDetails(VehicleOrderDTO vehicleOrderDTO,String vehicleId);

    HotelOrderDTO getHotelDetails(HotelOrderDTO block, String hotelId);

    GuideOrderDTO getGuideDetails(GuideOrderDTO block, String guideId);
//    String generateOrderIds();

}
