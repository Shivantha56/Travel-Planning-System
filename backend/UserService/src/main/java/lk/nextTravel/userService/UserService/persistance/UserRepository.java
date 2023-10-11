package lk.nextTravel.userService.UserService.persistance;

import lk.nextTravel.userService.UserService.dto.UserDTO;
import lk.nextTravel.userService.UserService.entity.User;
import lombok.NonNull;
import org.springframework.data.domain.Example;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Repository;

import java.util.function.Function;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

//    @Query("{userEmail:'?0'}")
    boolean existsUserByUserEmail(String email);

    User getUserByUserEmail(String email);

}
