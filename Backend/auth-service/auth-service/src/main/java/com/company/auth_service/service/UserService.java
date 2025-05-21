package com.company.auth_service.service;

import com.company.auth_service.entity.User;

import java.util.Optional;

public interface UserService {
    String registerUser(User user);
    String verifyUser(String token);
    Optional<User> findByEmail(String email); // New method for login
}
