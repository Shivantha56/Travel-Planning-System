package lk.nextTravel.travelService.TravelService.service.impl;

import jakarta.persistence.criteria.Order;
import lk.nextTravel.travelService.TravelService.dto.GuideOrderDTO;
import lk.nextTravel.travelService.TravelService.dto.HotelOrderDTO;
import lk.nextTravel.travelService.TravelService.dto.OrderDetailsDTO;
import lk.nextTravel.travelService.TravelService.dto.VehicleOrderDTO;
import lk.nextTravel.travelService.TravelService.entity.OrderDetails;
import lk.nextTravel.travelService.TravelService.repository.OrderDetailsRepository;
import lk.nextTravel.travelService.TravelService.service.OrderService;
import lk.nextTravel.travelService.TravelService.util.Converter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    OrderDetailsRepository orderDetailsRepository;
    @Autowired
    Converter converter;
    int generateIntegerValue = 0;

    @Override
    public String generateOrderId() {

        String prefix = "NEXT";
        generateIntegerValue += 1;

        String generatedId = prefix + generateIntegerValue;
        System.out.println(generatedId);
        return generatedId;
    }

    @Override
    public void saveOrder(OrderDetailsDTO orderDetailsDTO, VehicleOrderDTO vehicleOrderDTO,
                          HotelOrderDTO hotelOrderDTO, GuideOrderDTO guideOrderDTO) {


        int totalHeadCount = orderDetailsDTO.getNoOfAdults() + orderDetailsDTO.getNoOfChildren();

        orderDetailsDTO.setOrderDate(getTimeInstant());
        orderDetailsDTO.setCountDays(getPeriods(orderDetailsDTO.getStartDate(), orderDetailsDTO.getEndDate()));
        orderDetailsDTO.setCountNights(orderDetailsDTO.getCountDays() - 1);
        orderDetailsDTO.setTotalHeadCount(totalHeadCount);

        double hotelFee;

        if (orderDetailsDTO.getPackageCategory().equals("1")) {
            hotelFee = hotelOrderDTO.getHotelFeeOption1();
        } else if (orderDetailsDTO.getPackageCategory().equals("2")) {
            hotelFee = hotelOrderDTO.getHotelFeeOption2();
        } else if (orderDetailsDTO.getPackageCategory().equals("3")) {
            hotelFee = hotelOrderDTO.getHotelFeeOption3();
        } else if (orderDetailsDTO.getPackageCategory().equals("4")) {
            hotelFee = hotelOrderDTO.getHotelFeeOption4();
        } else {
            throw new RuntimeException("enter valid data");
        }


        double[] totalPrices = calculatePrice(vehicleOrderDTO.getVehiclePrice(), hotelFee,
                guideOrderDTO.getManDayValue(), orderDetailsDTO.getCountDays()
        );

        orderDetailsDTO.setTotalVehicleFee(totalPrices[1]);
        orderDetailsDTO.setTotalHotelValue(totalPrices[0]);
        orderDetailsDTO.setTotalGuideFee(totalPrices[2]);
        orderDetailsDTO.setTotalValue(totalPrices[3]);

        orderDetailsRepository.save(converter.convertToOrderEntity(orderDetailsDTO));


    }


    //get current time
    public String getTimeInstant() {

        LocalDate now = LocalDate.now();
        return now.toString();
    }

    public int getPeriods(String startDate, String endDate) {
        return Period.between(LocalDate.parse(startDate), LocalDate.parse(endDate)).getDays() + 1;
    }

    public double[] calculatePrice(double vehiclePrice, double hotelPrice, double guidePrice, int days) {


        double[] priceCount = new double[4];

        // calculate total hotel price
        priceCount[0] = hotelPrice * days;

        // calculate total vehicle price
        priceCount[1] = vehiclePrice * days;

        // calculate total guide price
        priceCount[2] = guidePrice * days;

        // calculate total price
        priceCount[3] = priceCount[0] + priceCount[1] + priceCount[2];

        System.out.println(Arrays.toString(priceCount));

        return priceCount;
    }


    @Override
    public VehicleOrderDTO getVehicleDetails(VehicleOrderDTO vehicleOrderDTO, String vehicleId) {


        System.out.println(vehicleOrderDTO.getVehicleId());
//        if (vehicleOrderDTO.getVehicleId().equals(vehicleId)) throw new RuntimeException("No vehicle found");
        return vehicleOrderDTO;
    }

    @Override
    public HotelOrderDTO getHotelDetails(HotelOrderDTO hotelOrderDTO, String hotelId) {
        System.out.println(hotelOrderDTO.getHotelName());
        return hotelOrderDTO;
    }

    @Override
    public GuideOrderDTO getGuideDetails(GuideOrderDTO guideOrderDTO, String guideId) {
        System.out.println(guideOrderDTO.getGuideName());
        return guideOrderDTO;
    }


    @Override
    public ArrayList<OrderDetailsDTO> getUserOrderDetails(String userId) {

        ArrayList<OrderDetailsDTO>getAllOrders = new ArrayList<>();

        List<OrderDetails> orderDetailsByUserId =
                orderDetailsRepository.getOrderDetailsByUserId(userId);

        for (OrderDetails order: orderDetailsByUserId){

            getAllOrders.add(converter.convertToOrderDTO(order));
        }

        return getAllOrders;

    }


}
