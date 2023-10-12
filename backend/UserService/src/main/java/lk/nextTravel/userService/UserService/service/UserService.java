package lk.nextTravel.userService.UserService.service;

import lk.nextTravel.userService.UserService.dto.UserDTO;

public interface UserService {

    void registerUser(UserDTO userDTO);

    void checkUserLogin(String userEmail,String userPassword);

    void deleteUser(String userEmail);

    void updateUser(UserDTO userDTO);
}
