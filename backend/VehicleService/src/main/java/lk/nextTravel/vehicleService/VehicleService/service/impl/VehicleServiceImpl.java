package lk.nextTravel.vehicleService.VehicleService.service.impl;

import lk.nextTravel.vehicleService.VehicleService.dto.DriverDTO;
import lk.nextTravel.vehicleService.VehicleService.dto.VehicleDTO;
import lk.nextTravel.vehicleService.VehicleService.entity.Driver;
import lk.nextTravel.vehicleService.VehicleService.entity.Vehicle;
import lk.nextTravel.vehicleService.VehicleService.repository.VehicleRepository;
import lk.nextTravel.vehicleService.VehicleService.service.DriverService;
import lk.nextTravel.vehicleService.VehicleService.service.VehicleService;
import lk.nextTravel.vehicleService.VehicleService.util.ModelsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.Base64;
import java.util.StringTokenizer;

@Service
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    VehicleRepository vehicleRepository;
    @Autowired
    DriverService driverService;

    @Autowired
    ModelsMapper modelsMapper;

    @Override
    public void saveVehicle(VehicleDTO vehicleDTO) {

        try {


            String vehicleFrontImage = Base64.getEncoder().encodeToString(vehicleDTO.getVehicleFrontImage());
            String vehicleRearImage = Base64.getEncoder().encodeToString(vehicleDTO.getVehicleRearImage());
            String vehicleSideImage = Base64.getEncoder().encodeToString(vehicleDTO.getVehicleSideImage());
            String vehicleInteriorFrontImage = Base64.getEncoder().encodeToString(vehicleDTO.getVehicleFrontInteriorImage());
            String vehicleInteriorRearImage = Base64.getEncoder().encodeToString(vehicleDTO.getVehicleRearInteriorImage());

            Vehicle vehicle = modelsMapper.vehicleDtoToEntityConversion(vehicleDTO);

        /*
        check the driver is available and return the drive id with the driver instance and pass the drive to save
        vehicle data
        */

            DriverDTO driverDTO = driverService.searchDriver(vehicleDTO.getDriverId());
            Driver driver = modelsMapper.driverDtoToEntityConversion(driverDTO);

            Vehicle addVehicle = new Vehicle(
                    vehicle.getVehicleNo(),
                    vehicle.getVehicleBrand(),
                    vehicle.getCategory(),
                    vehicle.getFuelType(),
                    vehicle.getHybrid(),
                    vehicle.getFuelUsage(),
                    vehicleFrontImage,
                    vehicleRearImage,
                    vehicleSideImage,
                    vehicleInteriorFrontImage,
                    vehicleInteriorRearImage,
                    vehicle.getSeatCapacity(),
                    vehicle.getVehicleType(),
                    vehicle.getTransmissionType(),
                    driver

            );

            vehicleRepository.save(addVehicle);
        } catch (Exception e) {

            throw new DataIntegrityViolationException("The Driver is already assign to the vehicle");

        }
    }
}
