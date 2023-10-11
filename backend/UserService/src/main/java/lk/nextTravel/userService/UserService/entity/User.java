package lk.nextTravel.userService.UserService.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.lang.Nullable;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class User{
    @Id
    String userId;
    String userName;
    String userEmail;
    String userNic;
    String userPassword;
    String generatedSalt;
    String userProfilePic;

    public User(String userName, String userEmail, String userNic, String userPassword, String userProfilePic) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userNic = userNic;
        this.userPassword = userPassword;
        this.userProfilePic = userProfilePic;
    }
}
