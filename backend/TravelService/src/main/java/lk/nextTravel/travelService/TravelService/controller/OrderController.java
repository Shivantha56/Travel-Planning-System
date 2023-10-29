package lk.nextTravel.travelService.TravelService.controller;

import lk.nextTravel.travelService.TravelService.dto.GuideOrderDTO;
import lk.nextTravel.travelService.TravelService.dto.HotelOrderDTO;
import lk.nextTravel.travelService.TravelService.dto.OrderDetailsDTO;
import lk.nextTravel.travelService.TravelService.dto.VehicleOrderDTO;
import lk.nextTravel.travelService.TravelService.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("api/v1/order")
public class OrderController {

//    WebClient webClient;

    @Value("${vehicle-service-endpoint}")
    private String vehicleEndPoint;
    @Value("${guide-service-endpint}")
    private String guideEndpoint;
    @Value("${hotel-service-endpoint}")
    private String hotelEndPoint;

    @Autowired
    OrderService orderService;

    @PostMapping(consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public void saveOrder(@ModelAttribute OrderDetailsDTO orderDetailsDTO) {

        OrderDetailsDTO orderData = new OrderDetailsDTO(
                orderDetailsDTO.getUserId(), orderDetailsDTO.getVehicleId(),
                orderDetailsDTO.getHotelId(),orderDetailsDTO.getGuideId(),
                orderDetailsDTO.getPackageCategory(),orderDetailsDTO.getStartDate(),
                orderDetailsDTO.getEndDate(),orderDetailsDTO.getCountDays(),
                orderDetailsDTO.getCountNights(),orderDetailsDTO.getTravelArea(),
                orderDetailsDTO.getNoOfAdults(),orderDetailsDTO.getNoOfChildren(),
                orderDetailsDTO.getWithPetsOrNot(),orderDetailsDTO.getNeedGuideOrNo()
        );

        WebClient webClientVehicle = WebClient.create(vehicleEndPoint + "/id/" + orderDetailsDTO.getVehicleId());
        Mono<VehicleOrderDTO> vehicleOrderDTOMono = webClientVehicle.get()
                .retrieve()
                .bodyToMono(VehicleOrderDTO.class);


        WebClient webClientHotel = WebClient.create(hotelEndPoint + "/id/" + orderDetailsDTO.getHotelId());
        Mono<HotelOrderDTO> hotelOrderDTOMono = webClientHotel
                .get()
                .retrieve().bodyToMono(HotelOrderDTO.class);


        VehicleOrderDTO vehicleDetails = orderService.getVehicleDetails(vehicleOrderDTOMono.block(), orderDetailsDTO.getVehicleId());
        HotelOrderDTO hotelDetails = orderService.getHotelDetails(hotelOrderDTOMono.block(), orderDetailsDTO.getHotelId());

        GuideOrderDTO guideOrderDTO = null;
        if (orderDetailsDTO.getNeedGuideOrNo().equals("Yes") || orderDetailsDTO.getNeedGuideOrNo().equals("yes")){
            WebClient webClientGuide = WebClient.create(guideEndpoint + "/id/" + orderDetailsDTO.getGuideId());
            Mono<GuideOrderDTO> guideOrderDTOMono = webClientGuide
                    .get()
                    .retrieve().bodyToMono(GuideOrderDTO.class);

            guideOrderDTO = orderService.getGuideDetails(guideOrderDTOMono.block(), orderDetailsDTO.getGuideId());
        }else {
            guideOrderDTO = new GuideOrderDTO();
            guideOrderDTO.setManDayValue(0.00);
        }

        orderService.saveOrder(orderData,vehicleDetails,hotelDetails,guideOrderDTO);


    }

}
