package lk.nextTravel.guideService.GuideService.util;

import lk.nextTravel.guideService.GuideService.dto.GuideDTO;
import lk.nextTravel.guideService.GuideService.entity.Guide;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ModelsMapper {

    @Autowired
    ModelMapper modelMapper;

    public Guide dtoToEntityConversion(GuideDTO guideDTO){
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        return modelMapper.map(guideDTO , Guide.class);
    }
    public GuideDTO entityToDtoConversion(Guide guide) {
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        return modelMapper.map(guide, GuideDTO.class);
    }

}
