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

        orderService.saveOrder(orderDetailsDTO);
//        WebClient webClientVehicle = WebClient.create(vehicleEndPoint + "/id/" + orderDetailsDTO.getVehicleId());
//        Mono<VehicleOrderDTO> vehicleOrderDTOMono = webClientVehicle.get()
//                .retrieve()
//                .bodyToMono(VehicleOrderDTO.class);
//
//
//        WebClient webClientHotel = WebClient.create(hotelEndPoint + "/id/" + orderDetailsDTO.getHotelId());
//        Mono<HotelOrderDTO> hotelOrderDTOMono = webClientHotel
//                .get()
//                .retrieve().bodyToMono(HotelOrderDTO.class);


//        WebClient webClientGuide = WebClient.create(guideEndpoint + "/id/" + orderDetailsDTO.getHotelId());
//        Mono<GuideOrderDTO> guideOrderDTOMono = webClientGuide
//                .get()
//                .retrieve().bodyToMono(GuideOrderDTO.class);


//        orderService.getVehicleDetails(vehicleOrderDTOMono.block(), orderDetailsDTO.getVehicleId());
//        orderService.getHotelDetails(hotelOrderDTOMono.block(), orderDetailsDTO.getHotelId());

        if (orderDetailsDTO.getNeedGuideOrNO().equals("Yes") || orderDetailsDTO.getNeedGuideOrNO().equals("yes")){
            WebClient webClientGuide = WebClient.create(guideEndpoint + "/id/" + orderDetailsDTO.getGuideId());
            Mono<GuideOrderDTO> guideOrderDTOMono = webClientGuide
                    .get()
                    .retrieve().bodyToMono(GuideOrderDTO.class);

            orderService.getGuideDetails(guideOrderDTOMono.block(), orderDetailsDTO.getGuideId());
        }


        orderService.saveOrder(orderDetailsDTO);


    }

}
