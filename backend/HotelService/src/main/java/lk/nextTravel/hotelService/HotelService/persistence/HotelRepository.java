package lk.nextTravel.hotelService.HotelService.persistence;

import lk.nextTravel.hotelService.HotelService.entity.Hotel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface HotelRepository extends MongoRepository<Hotel,String> {


    Optional<Hotel> findByHotelContactEmail(String email);

    void deleteByHotelContactEmail(String email);
}
