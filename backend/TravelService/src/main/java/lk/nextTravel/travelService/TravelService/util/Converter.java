package lk.nextTravel.travelService.TravelService.util;

import lk.nextTravel.travelService.TravelService.dto.GuideOrderDTO;
import lk.nextTravel.travelService.TravelService.dto.OrderDetailsDTO;
import lk.nextTravel.travelService.TravelService.entity.OrderDetails;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class Converter {

    @Autowired
    ModelMapper mapper;

    public OrderDetailsDTO convertToOrderDTO(OrderDetails orderDetails){
        return mapper.map(orderDetails,OrderDetailsDTO.class);
    }

    public OrderDetails convertToOrderEntity(OrderDetailsDTO orderDetails){
        return mapper.map(orderDetails,OrderDetails.class);
    }

}
