package lk.nextTravel.travelService.TravelService.service.impl;

import jakarta.persistence.criteria.Order;
import lk.nextTravel.travelService.TravelService.dto.OrderDetailsDTO;
import lk.nextTravel.travelService.TravelService.dto.VehicleOrderDTO;
import lk.nextTravel.travelService.TravelService.service.OrderService;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {

    int generateIntegerValue = 0;
    @Override
    public String generateOrderId() {

        String prefix = "NEXT";
        generateIntegerValue+= 1;

        String generatedId = prefix+generateIntegerValue;
        System.out.println(generatedId);
        return generatedId;
    }

    @Override
    public void saveOrder(OrderDetailsDTO orderDetailsDTO) {

    }

    @Override
    public void getVehicleDetails(VehicleOrderDTO vehicleOrderDTO,String vehicleId) {

        System.out.println(vehicleOrderDTO.getVehicleId());

//        if (vehicleOrderDTO.getVehicleId().equals(vehicleId)) throw new RuntimeException("No vehicle found");

    }


}
