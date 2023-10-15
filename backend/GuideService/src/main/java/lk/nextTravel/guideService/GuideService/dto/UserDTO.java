package lk.nextTravel.guideService.GuideService.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserDTO {
    String guideName;
    String guideAddress;
    String guideAge;
    String gender;
    int guideContactNo;
    String guideImage;
    String nicImageFront;
    String nicImageBack;
    String guideIdFront;
    String guideIdBack;
    double manDayValue;
    String remarks;
}
