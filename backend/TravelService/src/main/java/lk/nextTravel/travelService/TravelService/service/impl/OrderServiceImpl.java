package lk.nextTravel.travelService.TravelService.service.impl;

import jakarta.persistence.criteria.Order;
import lk.nextTravel.travelService.TravelService.dto.GuideOrderDTO;
import lk.nextTravel.travelService.TravelService.dto.HotelOrderDTO;
import lk.nextTravel.travelService.TravelService.dto.OrderDetailsDTO;
import lk.nextTravel.travelService.TravelService.dto.VehicleOrderDTO;
import lk.nextTravel.travelService.TravelService.repository.OrderDetailsRepository;
import lk.nextTravel.travelService.TravelService.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    OrderDetailsRepository orderDetailsRepository;

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
        orderDetailsDTO.setOrderDate(getTimeInstant());
        orderDetailsDTO.setCountDays(getPeriods(orderDetailsDTO.getStartDate(),orderDetailsDTO.getEndDate()));
        orderDetailsDTO.setCountNights(orderDetailsDTO.getCountDays()-1);




    }


    //get current time
    public String getTimeInstant(){

        LocalDate now = LocalDate.now();
        return now.toString();
    }

    public int getPeriods(String startDate,String endDate){
       return Period.between(LocalDate.parse(startDate),LocalDate.parse(endDate)).getDays()+1;
    }














    @Override
    public void getVehicleDetails(VehicleOrderDTO vehicleOrderDTO,String vehicleId) {

        System.out.println(vehicleOrderDTO.getVehicleId());

//        if (vehicleOrderDTO.getVehicleId().equals(vehicleId)) throw new RuntimeException("No vehicle found");

    }

    @Override
    public void getHotelDetails(HotelOrderDTO hotelOrderDTO, String hotelId) {
        System.out.println(hotelOrderDTO.getHotelName());
    }

    @Override
    public void getGuideDetails(GuideOrderDTO block, String guideId) {
        System.out.println(block.getGuideName());
    }


}
