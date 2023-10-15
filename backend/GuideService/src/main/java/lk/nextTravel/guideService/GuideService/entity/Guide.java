package lk.nextTravel.guideService.GuideService.entity;



import com.mongodb.lang.NonNull;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.lang.Nullable;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class Guide {

    @Id
    String guideId;
    String guideName;
    String guideAddress;
    String guideAge;
    String gender;
    @Indexed(unique = true)
    int guideContactNo;
    String guideImage;
    String nicImageFront;
    String nicImageBack;
    String guideIdFront;
    String guideIdBack;
    double manDayValue;
    String remarks;



}
