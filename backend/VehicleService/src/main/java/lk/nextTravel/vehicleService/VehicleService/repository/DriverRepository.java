package lk.nextTravel.vehicleService.VehicleService.repository;

import lk.nextTravel.vehicleService.VehicleService.entity.Driver;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DriverRepository extends CrudRepository<Driver,String> {
}
