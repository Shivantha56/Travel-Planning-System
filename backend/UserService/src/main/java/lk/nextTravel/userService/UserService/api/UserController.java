package lk.nextTravel.userService.UserService.api;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonValue;
import lk.nextTravel.userService.UserService.dto.UserDTO;
import lk.nextTravel.userService.UserService.service.UserService;
import lk.nextTravel.userService.UserService.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.Base64;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin
public class UserController {

    @Autowired
    UserService userService;


//    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value = "/register",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public void registerUser(UserDTO userDTO){

        userService.registerUser(userDTO);

    }

    @ResponseBody
    @GetMapping(value = {"/login"} , consumes = MediaType.APPLICATION_JSON_VALUE)
    public void userLoginDetails(@RequestBody UserDTO userDTO){
//        System.out.println(userDTO.getUserEmail());
        userService.checkUserLogin(userDTO.getUserEmail(),userDTO.getUserPassword());
    }

}
