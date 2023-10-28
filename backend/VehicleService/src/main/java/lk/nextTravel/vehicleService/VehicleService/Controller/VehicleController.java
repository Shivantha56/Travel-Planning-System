package lk.nextTravel.vehicleService.VehicleService.Controller;

import lk.nextTravel.vehicleService.VehicleService.dto.DriverVehicleDTO;
import lk.nextTravel.vehicleService.VehicleService.dto.VehicleDTO;
import lk.nextTravel.vehicleService.VehicleService.entity.Driver;
import lk.nextTravel.vehicleService.VehicleService.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.print.attribute.standard.Media;
import java.util.List;

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


    @PutMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public void update(@RequestPart String vehicleId,
                       @RequestPart String vehicleNo,
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


        VehicleDTO vehicleDTO = new VehicleDTO(Long.parseLong(vehicleId),vehicleNo,
                vehicleBrand,category,fuelType,hybrid,Double.parseDouble(fuelUsage),vehicleFrontImage,vehicleRearImage,
                vehicleSideImage,vehicleFrontInteriorImage,vehicleRearInteriorImage,Integer.parseInt(seatCapacity),
                vehicleType,transmissionType,driverId,remarks);

        vehicleService.updateVehicleDetails(vehicleDTO);

    }


    @ResponseBody
    @GetMapping(value = "{vehicleId}",produces = MediaType.APPLICATION_JSON_VALUE)
    public DriverVehicleDTO getVehicleDetailByVehicleNo(@PathVariable String vehicleId){

       return vehicleService.getvehicleDetailsById(vehicleId);

    }

    @DeleteMapping("{vehicleId}")
    public void delete(@PathVariable String vehicleId){
        vehicleService.delete(vehicleId);
    }

    @ResponseBody
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<DriverVehicleDTO> getAll(){
       return vehicleService.getAll();
    }

    @ResponseBody
    @GetMapping(value = "id/{vehicleId}",produces = MediaType.APPLICATION_JSON_VALUE)
    public DriverVehicleDTO getVehicleDetailByVehicleId(@PathVariable String vehicleId){

        System.out.println("new method for found vehicle details by the vehicle id");

        return vehicleService.getVehicleDetailsId(vehicleId);

    }


    @GetMapping("filter/{category}")
    public List<DriverVehicleDTO> filterVehicleData(@PathVariable String category){
        return vehicleService.filterVehicleData(category);
    }



}
