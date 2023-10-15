package lk.nextTravel.guideService.GuideService.service;

import lk.nextTravel.guideService.GuideService.dto.GuideDTO;
import lk.nextTravel.guideService.GuideService.entity.Guide;
import lk.nextTravel.guideService.GuideService.persistence.GuideRepository;
import lk.nextTravel.guideService.GuideService.util.ModelsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Base64;
import java.util.List;
import java.util.Optional;

@Service
public class GuideServiceImpl implements GuideService {

    @Autowired
    GuideRepository guideRepository;
    @Autowired
    ModelsMapper modelsMapper;

    @Override
    public void saveGuideInfo(GuideDTO guideDTO, String guideId) {
        String guideImage = Base64.getEncoder().encodeToString(guideDTO.getGuideImage());
        String nicImageFront = Base64.getEncoder().encodeToString(guideDTO.getNicImageFront());
        String nicImageBack = Base64.getEncoder().encodeToString(guideDTO.getNicImageBack());
        String guideIdFront = Base64.getEncoder().encodeToString(guideDTO.getGuideIdFront());
        String guideIdBack = Base64.getEncoder().encodeToString(guideDTO.getGuideIdBack());

        Guide guide = modelsMapper.dtoToEntityConversion(guideDTO);
        guide.setGuideId(guideId);
        guide.setGuideImage(guideImage);
        guide.setNicImageFront(nicImageFront);
        guide.setNicImageBack(nicImageBack);
        guide.setGuideIdFront(guideIdFront);
        guide.setGuideIdBack(guideIdBack);

        guideRepository.save(guide);

        System.out.println("save complete");

    }

    @Override
    public void deleteGuide(String phoneNumber) {


        boolean isAvailable = guideRepository.existsByGuideContactNo(Integer.parseInt(phoneNumber));
        if (isAvailable){
            Guide guide = guideRepository.findGuideByGuideContactNo(Integer.parseInt(phoneNumber));
            guideRepository.delete(guide);
        }else {
            throw new RuntimeException("guide Cannot found");
        }

//        Guide guideByGuideContactNo = guideRepository.findGuideByGuideContactNo(Integer.parseInt(phoneNumber));

    }

    @Override
    public void guideUpdate(GuideDTO guideDTO) {
        boolean isAvailable = guideRepository.existsByGuideContactNo(guideDTO.getGuideContactNo());
        if (isAvailable){
            Optional<Guide> byGuideContactNo = guideRepository.findByGuideContactNo(guideDTO.getGuideContactNo());
            if (byGuideContactNo.isPresent()){
                String guideId = byGuideContactNo.get().getGuideId();
                saveGuideInfo(guideDTO,guideId);

            }else {
                throw new RuntimeException("guide can not found");
            }
        }else {
            throw new RuntimeException("guide Cannot found");
        }
    }

    @Override
    public List<Guide> getAllGuideDetails() {
       return guideRepository.findAll();
    }
}
