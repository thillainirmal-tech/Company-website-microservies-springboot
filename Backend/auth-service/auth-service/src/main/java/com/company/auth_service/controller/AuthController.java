package com.company.auth_service.controller;

import com.company.auth_service.entity.User;
import com.company.auth_service.service.UserService;
import com.company.auth_service.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        return userService.registerUser(user);
    }

    @GetMapping("/verify")
    public String verifyUser(@RequestParam String token) {
        return userService.verifyUser(token);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        Optional<User> existingUser = userService.findByEmail(user.getEmail());

        if (existingUser.isPresent()) {
            User dbUser = existingUser.get();

            if (!dbUser.isEnabled()) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Please verify your email before logging in.");
            }

            if (passwordEncoder.matches(user.getPassword(), dbUser.getPassword())) {
                String jwt = jwtUtil.generateToken(dbUser.getEmail());
                return ResponseEntity.ok(new AuthResponse(jwt));
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials.");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
        }
    }

    @GetMapping("/ping")
    public String ping() {
        return "Auth service is alive";
    }
}
