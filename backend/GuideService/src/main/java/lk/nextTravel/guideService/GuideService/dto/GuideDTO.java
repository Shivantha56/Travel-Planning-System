package lk.nextTravel.guideService.GuideService.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
//@ToString
public class GuideDTO {

    String guideId;
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

    public GuideDTO(String guideName, String guideAddress, int guideAge, String gender, int guideContactNo, byte[] guideImage, byte[] nicImageFront, byte[] nicImageBack, byte[] guideIdFront, byte[] guideIdBack, double manDayValue, String remarks) {
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
