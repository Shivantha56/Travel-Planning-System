package lk.nextTravel.userService.UserService.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class UserDTO {

    String userId;
    String userName;
    String userEmail;
    String userNic;
    String userPassword;
    byte[] userProfilePic;

}
