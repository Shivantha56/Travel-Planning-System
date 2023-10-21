package lk.nextTravel.vehicleService.VehicleService.Controller;

import lk.nextTravel.vehicleService.VehicleService.dto.VehicleDTO;
import lk.nextTravel.vehicleService.VehicleService.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.print.attribute.standard.Media;

@RestController
@RequestMapping("api/v1/vehicle")
@CrossOrigin("*")
public class VehicleController {

    @Autowired
    VehicleService vehicleService;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public void saveVehicle(@RequestPart String vehicleNo,
                            @RequestPart String vehicleBrand,
                            @RequestPart String category,
                            @RequestPart String fuelType,
                            @RequestPart String hybrid,
                            @RequestPart String fuelUsage,
                            @RequestPart byte[] vehicleFrontImage,
                            @RequestPart byte[] vehicleRearImage,
                            @RequestPart byte[] vehicleSideImage,
                            @RequestPart byte[] vehicleFrontInteriorImage,
                            @RequestPart byte[] vehicleRearInteriorImage,
                            @RequestPart String seatCapacity,
                            @RequestPart String vehicleType,
                            @RequestPart String transmissionType,
                            @RequestPart String driverId,
                            @RequestPart String remarks){


        VehicleDTO vehicleDTO = new VehicleDTO(vehicleNo,
                vehicleBrand,category,fuelType,hybrid,Double.parseDouble(fuelUsage),vehicleFrontImage,vehicleRearImage,
                vehicleSideImage,vehicleFrontInteriorImage,vehicleRearInteriorImage,Integer.parseInt(seatCapacity),
                vehicleType,transmissionType,driverId,remarks);


        vehicleService.saveVehicle(vehicleDTO);

    }


}
