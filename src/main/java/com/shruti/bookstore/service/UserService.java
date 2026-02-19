package com.shruti.bookstore.service;

import com.shruti.bookstore.entity.User;

import java.util.List;

public interface UserService {

    List<User> getAllUsers();

    User getUserById(Long id);

    User getUserByEmail(String email);

    void deleteUser(Long id);
}
