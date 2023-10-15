package lk.nextTravel.guideService.GuideService.controller;

import lk.nextTravel.guideService.GuideService.dto.GuideDTO;
import lk.nextTravel.guideService.GuideService.service.GuideService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;

//@MultipartConfig(maxFileSize = -1,location = "/tmp")
@RestController
@RequestMapping("/api/v1/guide")
public class GuideController {

    @Autowired
    GuideService guideService;


    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public void saveGuide(@RequestPart String guideName,
                          @RequestPart String guideAddress,
                          @RequestPart String guideAge,
                          @RequestPart String gender,
                          @RequestPart String guideContactNo,
                          @RequestPart byte [] guideImage,
                          @RequestPart byte[] nicImageFront,
                          @RequestPart byte[] nicImageBack,
                          @RequestPart byte[] guideIdFront,
                          @RequestPart byte[] guideIdBack,
                          @RequestPart String manDayValue,
                          @RequestPart String remarks){

        GuideDTO guideDTO = new GuideDTO(guideName,guideAddress,Integer.parseInt(guideAge),gender,Integer.parseInt(guideContactNo),guideImage,nicImageFront,
                nicImageBack,guideIdFront,guideIdBack,Double.parseDouble(manDayValue),remarks
        );

        guideService.saveGuideInfo(guideDTO,null);

    }

    @DeleteMapping("{phoneNumber}")
    public void deleteGuide(@PathVariable("phoneNumber")String number){

        guideService.deleteGuide(number);

    }

    @PutMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public void updateGuide(@RequestPart String guideName,
                            @RequestPart String guideAddress,
                            @RequestPart String guideAge,
                            @RequestPart String gender,
                            @RequestPart String guideContactNo,
                            @RequestPart byte [] guideImage,
                            @RequestPart byte[] nicImageFront,
                            @RequestPart byte[] nicImageBack,
                            @RequestPart byte[] guideIdFront,
                            @RequestPart byte[] guideIdBack,
                            @RequestPart String manDayValue,
                            @RequestPart String remarks){

        GuideDTO guideDTO = new GuideDTO(guideName,guideAddress,Integer.parseInt(guideAge),gender,Integer.parseInt(guideContactNo),guideImage,nicImageFront,
                nicImageBack,guideIdFront,guideIdBack,Double.parseDouble(manDayValue),remarks
        );


        guideService.guideUpdate(guideDTO);

    }


    public void getAllGuide(){

    }

    public void getGuideByPhoneNumber(){

    }



}
