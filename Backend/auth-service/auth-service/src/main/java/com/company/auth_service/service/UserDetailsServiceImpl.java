package com.company.auth_service.service;

import com.company.auth_service.entity.User;
import com.company.auth_service.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserDetailsServiceImpl implements UserDetailsService, UserService {

    @Autowired
    private UserRepository userRepository;

    // Use PasswordEncoder interface, not BCryptPasswordEncoder class
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));

        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                user.isEnabled(),
                true,
                true,
                true,
                Collections.singletonList(new SimpleGrantedAuthority("ROLE_" + user.getRole()))
        );
    }

    @Override
    public String registerUser(User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return "User already exists with email: " + user.getEmail();
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setEnabled(false);
        user.setRole("USER");
        user.setVerificationToken(UUID.randomUUID().toString());
        userRepository.save(user);

        System.out.println("Verification token: " + user.getVerificationToken());
        return "User registered successfully. Please verify using the token sent to your email.";
    }

    @Override
    public String verifyUser(String token) {
        Optional<User> userOptional = userRepository.findByVerificationToken(token);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setEnabled(true);
            user.setVerificationToken(null);
            userRepository.save(user);
            return "User verified successfully.";
        } else {
            return "Invalid verification token.";
        }
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
