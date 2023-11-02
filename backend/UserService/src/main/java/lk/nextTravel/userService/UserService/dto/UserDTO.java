package lk.nextTravel.userService.UserService.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class UserDTO {

//    String userId;
    String userId;
    String userName;
    String userEmail;
    String userNic;
    String userAddress;
    String userPassword;
    byte[] userProfilePic;

    public UserDTO(String userName, String userEmail, String userNic, String userAddress, String userPassword, byte[] userProfilePic) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userNic = userNic;
        this.userAddress = userAddress;
        this.userPassword = userPassword;
        this.userProfilePic = userProfilePic;
    }
}
