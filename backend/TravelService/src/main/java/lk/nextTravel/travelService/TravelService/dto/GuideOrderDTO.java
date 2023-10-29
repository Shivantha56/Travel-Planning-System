package lk.nextTravel.travelService.TravelService.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class GuideOrderDTO {

    private String guideId;
    private String guideName;
    double manDayValue;

}
