package lk.nextTravel.hotelService.HotelService.persistence;

import lk.nextTravel.hotelService.HotelService.entity.Hotel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelRepository extends MongoRepository<Hotel,String> {


}
