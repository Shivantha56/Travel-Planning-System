package lk.nextTravel.userService.UserService.util;

import lk.nextTravel.userService.UserService.dto.UserDTO;
import lk.nextTravel.userService.UserService.entity.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.annotation.Collation;
import org.springframework.stereotype.Component;

@Component
public class ModelMapping {

    @Autowired
    ModelMapper modelMapper;

    public User convertToEntity(UserDTO userDTO){

        return modelMapper.map(userDTO, User.class);

    }
    public UserDTO convertToDTO(User user){

        return modelMapper.map(user, UserDTO.class);

    }


}
