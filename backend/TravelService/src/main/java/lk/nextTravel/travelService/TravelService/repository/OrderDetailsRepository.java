package lk.nextTravel.travelService.TravelService.repository;

import lk.nextTravel.travelService.TravelService.entity.OrderDetails;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderDetailsRepository extends CrudRepository<OrderDetails,String> {


}
