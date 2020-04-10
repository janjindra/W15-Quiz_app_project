package com.example.codeclan.quiz.controllers;

import com.example.codeclan.quiz.models.Question;
import com.example.codeclan.quiz.models.Quiz;
import com.example.codeclan.quiz.repositories.QuestionRepository;
import com.example.codeclan.quiz.repositories.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/quizzes")
public class QuizController {

    @Autowired
    QuizRepository quizRepository;

    @GetMapping
    public ResponseEntity<List<Quiz>> getAllQuizzes(){
        return new ResponseEntity<>(quizRepository.findAll(), HttpStatus.OK);
    }


}
