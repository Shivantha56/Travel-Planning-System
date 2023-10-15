package lk.nextTravel.guideService.GuideService.service;

import lk.nextTravel.guideService.GuideService.dto.GuideDTO;

public interface GuideService {
    void saveGuideInfo(GuideDTO guideDTO,String guideId);

    void deleteGuide(String phoneNumber);

    void guideUpdate(GuideDTO guideDTO);

}
