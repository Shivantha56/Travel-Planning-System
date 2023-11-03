package lk.nextTravel.userService.UserService.api;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonValue;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
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


    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value = "/register",consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public void registerUser(@Valid UserDTO userDTO){

        userService.registerUser(userDTO);

    }

    @ResponseBody
    @GetMapping(value = {"/login"})
    public UserDTO userLoginDetails(@ModelAttribute UserDTO userDTO){
        return userService.checkUserLogin(userDTO.getUserEmail(),userDTO.getUserPassword());
    }

    @GetMapping("{userEmail}")
    public void userDelete(@PathVariable @NotNull
                               @Pattern(regexp = "^[A-Za-z0-9+_.-]+@(.+)$",message = "enter valid email address")
                               String userEmail){

        userService.deleteUser(userEmail);

    }

    @PatchMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public void userUpdate(@Valid UserDTO userDTO){
//        System.out.println(String.valueOf(userDTO));
        userService.updateUser(userDTO);
    }


}
