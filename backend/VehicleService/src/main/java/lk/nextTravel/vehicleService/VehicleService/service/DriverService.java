package lk.nextTravel.vehicleService.VehicleService.service;

import lk.nextTravel.vehicleService.VehicleService.dto.DriverDTO;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;

import java.util.List;

@Component
public interface DriverService {
    void saveDriver(DriverDTO driverDTO);

    DriverDTO searchDriver(String driverId);

    List<DriverDTO> getAllDriverDetails();
}
