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

    @Override
    public GuideDTO searchGuide(String phoneNumber) {
        Optional<Guide> guide = guideRepository.findByGuideContactNo(Integer.parseInt(phoneNumber));
        GuideDTO guidedto;

        if (guide.isPresent()){
            String guideId = guide.get().getGuideId();
            String guideName = guide.get().getGuideName();
            String guideAddress = guide.get().getGuideAddress();
            int guideAge = guide.get().getGuideAge();
            String gender = guide.get().getGender();
            int guideContactNo = guide.get().getGuideContactNo();
            String guideImage = guide.get().getGuideImage();
            String nicImageFront = guide.get().getNicImageFront();
            String nicImageBack = guide.get().getNicImageBack();
            String guideIdFront = guide.get().getGuideIdFront();
            String guideIdBack = guide.get().getGuideIdBack();
            double manDayValue = guide.get().getManDayValue();
            String remarks = guide.get().getRemarks();

            byte[] guideImageDecode = Base64.getDecoder().decode(guideImage);
            byte[] nicImageFrontDecoder = Base64.getDecoder().decode(nicImageFront);
            byte[] nicImageBackDecoder = Base64.getDecoder().decode(nicImageBack);
            byte[] guideIdFrontDecode = Base64.getDecoder().decode(guideIdFront);
            byte[] guideIdBackDecode = Base64.getDecoder().decode(guideIdBack);


            return guidedto = new GuideDTO(guideId,guideName,guideAddress,guideAge,gender,
                    guideContactNo,guideImageDecode,nicImageFrontDecoder,nicImageBackDecoder,guideIdFrontDecode,
                    guideIdBackDecode,manDayValue,remarks);

        }else {
            throw new RuntimeException("guide cannot found");
        }

    }

    @Override
    public GuideDTO getGuideById(String guideId) {

        Optional<Guide> guide = guideRepository.findById(guideId);
        GuideDTO guidedto;

        if (guide.isPresent()){
            String getGuide = guide.get().getGuideId();
            String guideName = guide.get().getGuideName();
            String guideAddress = guide.get().getGuideAddress();
            int guideAge = guide.get().getGuideAge();
            String gender = guide.get().getGender();
            int guideContactNo = guide.get().getGuideContactNo();
            String guideImage = guide.get().getGuideImage();
            String nicImageFront = guide.get().getNicImageFront();
            String nicImageBack = guide.get().getNicImageBack();
            String guideIdFront = guide.get().getGuideIdFront();
            String guideIdBack = guide.get().getGuideIdBack();
            double manDayValue = guide.get().getManDayValue();
            String remarks = guide.get().getRemarks();

//            byte[] guideImageDecode = Base64.getDecoder().decode(guideImage);
//            byte[] nicImageFrontDecoder = Base64.getDecoder().decode(nicImageFront);
//            byte[] nicImageBackDecoder = Base64.getDecoder().decode(nicImageBack);
//            byte[] guideIdFrontDecode = Base64.getDecoder().decode(guideIdFront);
//            byte[] guideIdBackDecode = Base64.getDecoder().decode(guideIdBack);

            byte[] guideImageDecode = null;
            byte[] nicImageFrontDecoder = null;
            byte[] nicImageBackDecoder = null;
            byte[] guideIdFrontDecode = null;
            byte[] guideIdBackDecode = null;


            return guidedto = new GuideDTO(getGuide,guideName,guideAddress,guideAge,gender,
                    guideContactNo,guideImageDecode,nicImageFrontDecoder,nicImageBackDecoder,guideIdFrontDecode,
                    guideIdBackDecode,manDayValue,remarks);

        }else {
            throw new RuntimeException("guide cannot found");
        }

    }
}
