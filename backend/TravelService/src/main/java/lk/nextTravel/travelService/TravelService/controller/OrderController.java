package lk.nextTravel.travelService.TravelService.controller;

import lk.nextTravel.travelService.TravelService.dto.OrderDetailsDTO;
import lk.nextTravel.travelService.TravelService.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/order")
public class OrderController {

    @Autowired
    OrderService orderService;

    @PostMapping(consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public void saveOrder(@ModelAttribute OrderDetailsDTO orderDetailsDTO) {




    }

}
