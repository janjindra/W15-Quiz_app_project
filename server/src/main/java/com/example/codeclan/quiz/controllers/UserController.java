package com.example.codeclan.quiz.controllers;

import com.example.codeclan.quiz.models.Question;
import com.example.codeclan.quiz.models.User;
import com.example.codeclan.quiz.repositories.QuestionRepository;
import com.example.codeclan.quiz.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/users")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity postUser(@RequestBody User user){
        userRepository.save(user);
        return new ResponseEntity(user, HttpStatus.CREATED);
    }


}
