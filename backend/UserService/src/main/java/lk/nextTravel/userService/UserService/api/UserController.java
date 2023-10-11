package lk.nextTravel.userService.UserService.api;

import lk.nextTravel.userService.UserService.dto.UserDTO;
import lk.nextTravel.userService.UserService.service.UserService;
import lk.nextTravel.userService.UserService.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping(value = {"/login"} , consumes = MediaType.APPLICATION_JSON_VALUE)
    public void userLoginDetails(String userEmail,String userPassword){
        userService.checkUserLogin(userEmail,userPassword);
    }
//    @GetMapping
//    public void getUserDetailsByEmail(){
//
//    }
//    @GetMapping
//    public void getUserDetailsByNIC(){
//
//    }
//    @DeleteMapping
//    public void deleteUser(){
//
//    }
//    @PutMapping
//    public void updateUser(){
//
//    }
}
