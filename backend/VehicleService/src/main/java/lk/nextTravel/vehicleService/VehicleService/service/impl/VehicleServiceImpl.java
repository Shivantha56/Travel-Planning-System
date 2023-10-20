package lk.nextTravel.vehicleService.VehicleService.service.impl;

import lk.nextTravel.vehicleService.VehicleService.dto.VehicleDTO;
import lk.nextTravel.vehicleService.VehicleService.entity.Vehicle;
import lk.nextTravel.vehicleService.VehicleService.repository.VehicleRepository;
import lk.nextTravel.vehicleService.VehicleService.service.VehicleService;
import lk.nextTravel.vehicleService.VehicleService.util.ModelsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Base64;

@Service
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    VehicleRepository vehicleRepository;
    @Autowired
    ModelsMapper modelsMapper;

    @Override
    public void saveVehicle(VehicleDTO vehicleDTO) {

        String vehicleFrontImage = Base64.getEncoder().encodeToString(vehicleDTO.getVehicleFrontImage());
        String vehicleRearImage = Base64.getEncoder().encodeToString(vehicleDTO.getVehicleRearImage());
        String vehicleSideImage = Base64.getEncoder().encodeToString(vehicleDTO.getVehicleSideImage());
        String vehicleInteriorFrontImage = Base64.getEncoder().encodeToString(vehicleDTO.getVehicleFrontInteriorImage());
        String vehicleInteriorRearImage = Base64.getEncoder().encodeToString(vehicleDTO.getVehicleRearInteriorImage());

        Vehicle vehicle = modelsMapper.vehicleDtoToEntityConversion(vehicleDTO);
        vehicle.setVehicleFrontImage(vehicleFrontImage);
        vehicle.setVehicleRearImage(vehicleRearImage);
        vehicle.setVehicleSideImage(vehicleSideImage);
        vehicle.setVehicleFrontInteriorImage(vehicleInteriorFrontImage);
        vehicle.setVehicleRearInteriorImage(vehicleInteriorRearImage);

        vehicleRepository.save(vehicle);

    }
}
