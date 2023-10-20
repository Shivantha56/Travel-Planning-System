package lk.nextTravel.vehicleService.VehicleService.service.impl;

import lk.nextTravel.vehicleService.VehicleService.dto.DriverDTO;
import lk.nextTravel.vehicleService.VehicleService.entity.Driver;
import lk.nextTravel.vehicleService.VehicleService.repository.DriverRepository;
import lk.nextTravel.vehicleService.VehicleService.service.DriverService;
import lk.nextTravel.vehicleService.VehicleService.util.ModelsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Base64;

@Service
public class DriverServiceImpl implements DriverService {

    @Autowired
    DriverRepository driverRepository;
    @Autowired
    ModelsMapper modelsMapper;


    @Override
    public void saveDriver(DriverDTO driverDTO) {

        Driver driver = modelsMapper.driverDtoToEntityConversion(driverDTO);

        String licenseFront = Base64.getEncoder().encodeToString(driverDTO.getDriverLicenseFront());
        String licenseRear = Base64.getEncoder().encodeToString(driverDTO.getDriverLicenseRear());

        driver.setDriverLicenseFront(licenseFront);
        driver.setDriverLicenseRear(licenseRear);

        driverRepository.save(driver);


    }
}
