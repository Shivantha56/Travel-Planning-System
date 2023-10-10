package lk.nextTravel.userService.UserService.api;

import jakarta.servlet.annotation.WebServlet;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin

public class UserController {

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public void saveUser(){

    }
    @GetMapping
    public void getUser(){

    }
    @DeleteMapping
    public void deleteUser(){

    }
    @PutMapping
    public void updateUser(){

    }
}
