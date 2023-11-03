package lk.nextTravel.userService.UserService.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class UserDTO {

//    String userId;
    String userId;
    @NotNull
    @Pattern(regexp = "^[A-Za-z ]+$")
    String userName;
    @NotNull
    @Pattern(regexp = "^[A-Za-z0-9+_.-]+@(.+)$",message = "enter valid email address")
    String userEmail;
    @NotNull
    @Size(max = 15)
    String userNic;
    @NotNull
    String userAddress;
    @NotNull
    String userPassword;
    byte[] userProfilePic;

    public UserDTO(@NonNull String userName, @NonNull String userEmail, @NonNull String userNic, @NonNull String userAddress, @NonNull String userPassword, byte[] userProfilePic) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userNic = userNic;
        this.userAddress = userAddress;
        this.userPassword = userPassword;
        this.userProfilePic = userProfilePic;
    }
}
