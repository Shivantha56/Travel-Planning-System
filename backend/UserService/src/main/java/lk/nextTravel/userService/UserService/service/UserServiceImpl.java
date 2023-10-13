package lk.nextTravel.userService.UserService.service;

import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Updates;
import com.mongodb.client.result.UpdateResult;
import lk.nextTravel.userService.UserService.dto.UserDTO;
import lk.nextTravel.userService.UserService.entity.User;
import lk.nextTravel.userService.UserService.persistance.UserRepository;
import lk.nextTravel.userService.UserService.util.ModelMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.Base64;
import java.util.Optional;

import static com.fasterxml.jackson.databind.type.LogicalType.Collection;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    ModelMapping modelMapping;




    @Override
    public void registerUser(UserDTO userDTO) {

        userDTO.setUserEmail(userDTO.getUserEmail().toLowerCase());

        if (userRepository.existsUserByUserEmail(userDTO.getUserEmail())){
            System.out.println("This email is not avaialble to register");
            throw new RuntimeException("error");
        }

        String genSalt = BCrypt.gensalt(12);
        String hashPw = BCrypt.hashpw(userDTO.getUserPassword(),genSalt);
        User user = modelMapping.convertToEntity(userDTO);
        user.setGeneratedSalt(genSalt);
        user.setUserPassword(hashPw);
        userRepository.save(user);

    }

    @Override
    public void checkUserLogin(String userEmail,String userPassword) {

        userEmail = userEmail.toLowerCase();

        if (userRepository.existsUserByUserEmail(userEmail)){

            Optional<User> user = userRepository.findUserByUserEmail(userEmail);
            System.out.println("user is present");

            if (user.isPresent()){
                String userEmail1 = user.get().getUserEmail();
                String generatedSalt = user.get().getGeneratedSalt();
                String generatedHashPaw = BCrypt.hashpw(userPassword, generatedSalt);

                if ((userEmail1.equals(userEmail)) && generatedHashPaw.equals(user.get().getUserPassword()) ){
                    System.out.println("password ok");

                    // use webflux for return all data related to the customer
                    // if user enable OTP send a otp to the client
                    // if OTP wrong 5 times set the google recaptcha

                }else {
                    throw new RuntimeException("user password not ok");
                }
            }else {
                throw new RuntimeException("user cannot found");
            }

        }else {
            System.out.println("Please check your email and password");
            throw new RuntimeException("error");
        }
    }

    @Override
    public void deleteUser(String userEmail) {

        byte[] decode = Base64.getDecoder().decode(userEmail);
        String decodeEmail = new String(decode);

        if (userRepository.existsUserByUserEmail(decodeEmail)){
            userRepository.deleteByUserEmail(decodeEmail);
        }else {
            throw new RuntimeException("something happen");
        }
    }

    @Override
    public void updateUser(UserDTO userDTO) {

        if (userRepository.existsUserByUserEmail(userDTO.getUserEmail())){
            System.out.println("This email is not avaialble to register");
            throw new RuntimeException("error");
        }

        String s = Base64.getEncoder().encodeToString(userDTO.getUserProfilePic());
        User user = modelMapping.convertToEntity(userDTO);

//        userRepository.save(user.getUserName(),user.getUserNic(),user.)


    }

}
