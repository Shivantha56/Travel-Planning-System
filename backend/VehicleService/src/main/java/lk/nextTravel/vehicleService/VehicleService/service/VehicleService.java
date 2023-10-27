package lk.nextTravel.vehicleService.VehicleService.service;

import lk.nextTravel.vehicleService.VehicleService.dto.DriverVehicleDTO;
import lk.nextTravel.vehicleService.VehicleService.dto.VehicleDTO;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface VehicleService {
    void saveVehicle(VehicleDTO vehicleDTO);
    void updateVehicleDetails(VehicleDTO vehicleDTO);

    DriverVehicleDTO getvehicleDetailsById(String vehicleId);

    void delete(String vehicleId);

    List<DriverVehicleDTO> getAll();

    DriverVehicleDTO getVehicleDetailsId(String vehicleId);
}
