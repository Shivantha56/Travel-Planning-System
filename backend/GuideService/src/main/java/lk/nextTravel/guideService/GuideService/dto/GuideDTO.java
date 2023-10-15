package lk.nextTravel.guideService.GuideService.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
//@ToString
public class GuideDTO {

    String guideName;
    String guideAddress;
    int guideAge;
    String gender;
    int guideContactNo;
    byte[] guideImage;
    byte[] nicImageFront;
    byte[] nicImageBack;
    byte[] guideIdFront;
    byte[] guideIdBack;
    double manDayValue;
    String remarks;
}
