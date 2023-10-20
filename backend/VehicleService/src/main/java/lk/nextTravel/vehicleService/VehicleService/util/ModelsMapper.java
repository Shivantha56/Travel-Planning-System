package lk.nextTravel.vehicleService.VehicleService.util;


import lk.nextTravel.vehicleService.VehicleService.dto.DriverDTO;
import lk.nextTravel.vehicleService.VehicleService.dto.VehicleDTO;
import lk.nextTravel.vehicleService.VehicleService.entity.Driver;
import lk.nextTravel.vehicleService.VehicleService.entity.Vehicle;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ModelsMapper {

    @Autowired
    ModelMapper modelMapper;

    public Driver driverDtoToEntityConversion(DriverDTO driverDTO) {
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        return modelMapper.map(driverDTO, Driver.class);
    }

    public DriverDTO driverEntityToDtoConversion(Driver driver) {
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        return modelMapper.map(driver, DriverDTO.class);
    }

    public Vehicle vehicleDtoToEntityConversion(VehicleDTO vehicleDTO) {
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        return modelMapper.map(vehicleDTO, Vehicle.class);
    }

    public VehicleDTO vehicleEntityToDtoConversion(Vehicle vehicle) {
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        return modelMapper.map(vehicle, VehicleDTO.class);
    }

}
