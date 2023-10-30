package lk.ijse.test.Test01.Authentication;

import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationEventPublisher;
import org.springframework.security.authentication.DefaultAuthenticationEventPublisher;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@EnableWebSecurity
@Configuration
public class Authentication {

    @Bean
    @ConditionalOnMissingBean(UserDetailsService.class)
    InMemoryUserDetailsManager inMemoryUserDetailsManager(){

        String generatedPassword = "{bcrypt}$2y$10$HygtS.hSLJKY7SiGhDtNKONZ/jf3zsslYvHwQEjSic0t7DUsArD4q";
        return new InMemoryUserDetailsManager(User.withUsername("dilshan").password(generatedPassword).roles("user").build());
    }

//    @Bean
//    @ConditionalOnMissingBean(AuthenticationEventPublisher.class)
//    DefaultAuthenticationEventPublisher defaultAuthenticationEventPublisher(ApplicationEventPublisher delegate) {
//        return new DefaultAuthenticationEventPublisher(delegate);
//    }

}
