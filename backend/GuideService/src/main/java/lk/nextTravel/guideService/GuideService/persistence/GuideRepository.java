package lk.nextTravel.guideService.GuideService.persistence;

import lk.nextTravel.guideService.GuideService.entity.Guide;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GuideRepository extends MongoRepository<Guide,String> {

    Guide findGuideByGuideContactNo(int phoneNumber);

    boolean existsByGuideContactNo(int phoneNumber);

    Optional<Guide> findByGuideContactNo(int guideContactNo);

}
