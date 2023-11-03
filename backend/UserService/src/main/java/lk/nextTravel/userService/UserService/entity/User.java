package lk.nextTravel.userService.UserService.entity;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.lang.Nullable;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class User{
    @Id
    String userId;
    @NotNull
    @Pattern(regexp = "^[A-Za-z ]+$")
    String userName;
    @NotNull
    @Pattern(regexp = "^[A-Za-z0-9+_.-]+@(.+)$",message = "enter valid email address")
    @Indexed(unique = true)
    String userEmail;
    @NotNull
    String userNic;
    @NotNull
    String userPassword;
    String generatedSalt;
    @NotNull
    String userProfilePic;

    public User(@NonNull String userName, @NonNull String userEmail, @NonNull String userNic, @NonNull String userPassword, String userProfilePic) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userNic = userNic;
        this.userPassword = userPassword;
        this.userProfilePic = userProfilePic;
    }
}
