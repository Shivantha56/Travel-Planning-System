package lk.nextTravel.vehicleService.VehicleService.service;

import lk.nextTravel.vehicleService.VehicleService.dto.VehicleDTO;
import org.springframework.stereotype.Component;

@Component
public interface VehicleService {
    void saveVehicle(VehicleDTO vehicleDTO);
}
