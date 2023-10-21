package lk.nextTravel.vehicleService.VehicleService.Controller;


import lk.nextTravel.vehicleService.VehicleService.dto.DriverDTO;
import lk.nextTravel.vehicleService.VehicleService.entity.Driver;
import lk.nextTravel.vehicleService.VehicleService.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;

@RestController
@RequestMapping("api/v1/driver")
@CrossOrigin("*")
public class DriverController {

    @Autowired
    DriverService driverService;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public void saveDriver(@RequestPart String driverName,
                           @RequestPart String driverContactNo,
                           @RequestPart byte[] driverLicenseFront,
                           @RequestPart byte[] driverLicenseRear){

        DriverDTO driverDTO = new DriverDTO(driverName,Integer.parseInt(driverContactNo),driverLicenseFront,driverLicenseRear);

        driverService.saveDriver(driverDTO);

    }



}
