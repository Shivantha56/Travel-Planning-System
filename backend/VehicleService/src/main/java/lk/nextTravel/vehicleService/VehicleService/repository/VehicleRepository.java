package lk.nextTravel.vehicleService.VehicleService.repository;

import lk.nextTravel.vehicleService.VehicleService.entity.Vehicle;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleRepository extends CrudRepository<Vehicle, Long> {

}
