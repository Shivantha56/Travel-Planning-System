package lk.nextTravel.travelService.TravelService.repository;

import lk.nextTravel.travelService.TravelService.entity.OrderDetails;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderDetailsRepository extends CrudRepository<OrderDetails,String> {


    List<OrderDetails> getOrderDetailsByUserId(String userId);

}
