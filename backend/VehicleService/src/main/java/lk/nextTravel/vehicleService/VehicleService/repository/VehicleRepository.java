package lk.nextTravel.vehicleService.VehicleService.repository;

import lk.nextTravel.vehicleService.VehicleService.entity.Vehicle;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface VehicleRepository extends CrudRepository<Vehicle, Long> {


    Optional<Vehicle> findVehicleByVehicleNo(String vehicleId);

    List<Vehicle> findVehicleByCategoryEquals(String category);
//    Optional<Vehicle> findVehicleByI(String vehicleId);

//    Vehicle findVehicleByVehicleNo(String vehicleId);
}
