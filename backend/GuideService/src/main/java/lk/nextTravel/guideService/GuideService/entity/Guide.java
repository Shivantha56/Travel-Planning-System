package lk.nextTravel.guideService.GuideService.entity;



import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;


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
    int guideAge;
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

    public Guide(String guideName, String guideAddress, int guideAge, String gender, int guideContactNo, String guideImage, String nicImageFront, String nicImageBack, String guideIdFront, String guideIdBack, double manDayValue, String remarks) {
        this.guideName = guideName;
        this.guideAddress = guideAddress;
        this.guideAge = guideAge;
        this.gender = gender;
        this.guideContactNo = guideContactNo;
        this.guideImage = guideImage;
        this.nicImageFront = nicImageFront;
        this.nicImageBack = nicImageBack;
        this.guideIdFront = guideIdFront;
        this.guideIdBack = guideIdBack;
        this.manDayValue = manDayValue;
        this.remarks = remarks;
    }
}
