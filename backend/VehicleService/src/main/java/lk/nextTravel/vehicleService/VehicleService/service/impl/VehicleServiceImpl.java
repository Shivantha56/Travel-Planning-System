package lk.nextTravel.vehicleService.VehicleService.service.impl;

import lk.nextTravel.vehicleService.VehicleService.dto.DriverDTO;
import lk.nextTravel.vehicleService.VehicleService.dto.DriverVehicleDTO;
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

import java.util.*;

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
                    driver,
                    vehicle.getRemarks()

            );

            vehicleRepository.save(addVehicle);
        } catch (Exception e) {

            throw new DataIntegrityViolationException("The Driver is already assign to the vehicle");

        }
    }

    @Override
    public void updateVehicleDetails(VehicleDTO vehicleDTO) {
        Optional<Vehicle> byId = vehicleRepository.findById(vehicleDTO.getVehicleId());

        if (byId.isPresent()) {
            String vehicleFrontImage = Base64.getEncoder().encodeToString(vehicleDTO.getVehicleFrontImage());
            String vehicleRearImage = Base64.getEncoder().encodeToString(vehicleDTO.getVehicleRearImage());
            String vehicleSideImage = Base64.getEncoder().encodeToString(vehicleDTO.getVehicleSideImage());
            String vehicleInteriorFrontImage = Base64.getEncoder().encodeToString(vehicleDTO.getVehicleFrontInteriorImage());
            String vehicleInteriorRearImage = Base64.getEncoder().encodeToString(vehicleDTO.getVehicleRearInteriorImage());

            Vehicle vehicle = modelsMapper.vehicleDtoToEntityConversion(vehicleDTO);

            DriverDTO driverDTO = driverService.searchDriver(vehicleDTO.getDriverId());
            Driver driver = modelsMapper.driverDtoToEntityConversion(driverDTO);


            Vehicle addVehicle = new Vehicle(
                    vehicle.getVehicleId(),
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
                    driver,
                    vehicle.getRemarks()

            );

            vehicleRepository.save(addVehicle);

        } else {
            throw new RuntimeException("can not update");
        }

    }

    @Override
    public DriverVehicleDTO getvehicleDetailsById(String vehicleId) {
        ArrayList<String> list = new ArrayList<>();

        DriverVehicleDTO addVehicle;


        Optional<Vehicle> vehicle = vehicleRepository.findVehicleByVehicleNo(vehicleId);


        if (vehicle.isPresent()) {

            Driver driver = vehicle.get().getDriver();

            addVehicle = new DriverVehicleDTO(
                    driver.getDriverId(),
                    driver.getDriverName(),
                    driver.getDriverContactNo(),
                    vehicle.get().getVehicleId(),
                    vehicle.get().getVehicleNo(),
                    vehicle.get().getVehicleBrand(),
                    vehicle.get().getCategory(),
                    vehicle.get().getFuelType(),
                    vehicle.get().getHybrid(),
                    vehicle.get().getFuelUsage(),
                    vehicle.get().getVehicleFrontImage(),
                    vehicle.get().getVehicleRearImage(),
                    vehicle.get().getVehicleSideImage(),
                    vehicle.get().getVehicleFrontInteriorImage(),
                    vehicle.get().getVehicleRearInteriorImage(),
                    vehicle.get().getSeatCapacity(),
                    vehicle.get().getVehicleType(),
                    vehicle.get().getTransmissionType(),
//                    vehicle.get().getDriver(),
                    vehicle.get().getRemarks()

                    );

//            VehicleDTO vehicleDTO = modelsMapper.vehicleEntityToDtoConversion(addVehicle);
//            vehicleList.add(vehicleDTO);
//
//            Driver driver = addVehicle.getDriver();
//
//            vehicleList.add(driver.getDriverId());
//            System.out.println(driver.getDriverName());

        } else {
            throw new RuntimeException("vehicle can not found");
        }
//        Vehicle vehicle1 = new Vehicle();
//        Driver driver = vehicle1.getDriver();
////        driver.getDriverName();

//        System.out.println(driver.getDriverName());

        return addVehicle;
    }

    @Override
    public void delete(String vehicleId) {

        Optional<Vehicle> byId = vehicleRepository.findById(Long.parseLong(vehicleId));
        if (byId.isPresent()){
            vehicleRepository.deleteById(Long.parseLong(vehicleId));
        }else {
            throw new RuntimeException("vehicle can not found with that name");
        }


    }

    @Override
    public List<DriverVehicleDTO> getAll() {

        List<DriverVehicleDTO> list = new ArrayList<>();
        DriverVehicleDTO addVehicle;

        Iterable<Vehicle> all = vehicleRepository.findAll();

        for (Vehicle vehicle: all) {

            Driver driver = vehicle.getDriver();

            addVehicle = new DriverVehicleDTO(
                    driver.getDriverId(),
                    driver.getDriverName(),
                    driver.getDriverContactNo(),
                    vehicle.getVehicleId(),
                    vehicle.getVehicleNo(),
                    vehicle.getVehicleBrand(),
                    vehicle.getCategory(),
                    vehicle.getFuelType(),
                    vehicle.getHybrid(),
                    vehicle.getFuelUsage(),
//                    vehicle.getVehicleFrontImage(),
//                    vehicle.getVehicleRearImage(),
//                    vehicle.getVehicleSideImage(),
//                    vehicle.getVehicleFrontInteriorImage(),
//                    vehicle.getVehicleRearInteriorImage(),
                    vehicle.getSeatCapacity(),
                    vehicle.getVehicleType(),
                    vehicle.getTransmissionType(),
                    vehicle.getRemarks()

            );

            list.add(addVehicle);
        }



        return list;
    }

    @Override
    public DriverVehicleDTO getVehicleDetailsId(String vehicleId) {

        ArrayList<String> list = new ArrayList<>();

        DriverVehicleDTO addVehicle;


        Optional<Vehicle> vehicle;
        vehicle = vehicleRepository.findById(Long.parseLong(vehicleId));


        if (vehicle.isPresent()) {

            Driver driver = vehicle.get().getDriver();

            addVehicle = new DriverVehicleDTO(
                    driver.getDriverId(),
                    driver.getDriverName(),
                    driver.getDriverContactNo(),
                    vehicle.get().getVehicleId(),
                    vehicle.get().getVehicleNo(),
                    vehicle.get().getVehicleBrand(),
                    vehicle.get().getCategory(),
                    vehicle.get().getFuelType(),
                    vehicle.get().getHybrid(),
                    vehicle.get().getFuelUsage(),
//                    vehicle.get().getVehicleFrontImage(),
//                    vehicle.get().getVehicleRearImage(),
//                    vehicle.get().getVehicleSideImage(),
//                    vehicle.get().getVehicleFrontInteriorImage(),
//                    vehicle.get().getVehicleRearInteriorImage(),
                    vehicle.get().getSeatCapacity(),
                    vehicle.get().getVehicleType(),
                    vehicle.get().getTransmissionType(),
//                    vehicle.get().getDriver(),
                    vehicle.get().getRemarks()

            );

//            VehicleDTO vehicleDTO = modelsMapper.vehicleEntityToDtoConversion(addVehicle);
//            vehicleList.add(vehicleDTO);
//
//            Driver driver = addVehicle.getDriver();
//
//            vehicleList.add(driver.getDriverId());
//            System.out.println(driver.getDriverName());

        } else {
            throw new RuntimeException("vehicle can not found");
        }
//        Vehicle vehicle1 = new Vehicle();
//        Driver driver = vehicle1.getDriver();
////        driver.getDriverName();

//        System.out.println(driver.getDriverName());

        return addVehicle;
    }

    @Override
    public List<DriverVehicleDTO> filterVehicleData(String category) {

        if (category.equals("1")){
            return filterVehicle("Economy");
        }else if (category.equals("2")){
            return filterVehicle("Mid-range");
        }else if (category.equals("3")){
            return filterVehicle("Luxury");
        }else if (category.equals("4")){
            return filterVehicle("Super-Luxury");
        }else {
            throw new RuntimeException("can not filter the data");
        }

    }


    public List<DriverVehicleDTO> filterVehicle(String vehicleCategory){

        List<DriverVehicleDTO> list = new ArrayList<>();
        DriverVehicleDTO addVehicle;

            List<Vehicle> vehicles = vehicleRepository.findVehicleByCategoryEquals(vehicleCategory);

            for (Vehicle vehicle: vehicles) {

                Driver driver = vehicle.getDriver();

                addVehicle = new DriverVehicleDTO(
                        driver.getDriverId(),
                        driver.getDriverName(),
                        driver.getDriverContactNo(),
                        vehicle.getVehicleId(),
                        vehicle.getVehicleNo(),
                        vehicle.getVehicleBrand(),
                        vehicle.getCategory(),
                        vehicle.getFuelType(),
                        vehicle.getHybrid(),
                        vehicle.getFuelUsage(),
//                    vehicle.getVehicleFrontImage(),
//                    vehicle.getVehicleRearImage(),
//                    vehicle.getVehicleSideImage(),
//                    vehicle.getVehicleFrontInteriorImage(),
//                    vehicle.getVehicleRearInteriorImage(),
                        vehicle.getSeatCapacity(),
                        vehicle.getVehicleType(),
                        vehicle.getTransmissionType(),
                        vehicle.getRemarks()

                );

                list.add(addVehicle);
//            }

        }
            return list;
    }


}
