package com.example.codeclan.quiz.controllers;


import com.example.codeclan.quiz.models.Question;
import com.example.codeclan.quiz.repositories.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping (value = "/questions")
public class QuestionController {

    @Autowired
    QuestionRepository questionRepository;

//    @GetMapping
//    public ResponseEntity<List<Question>> getAllQuestions(){
//        return new ResponseEntity<>(questionRepository.findAll(), HttpStatus.OK);
//    }

    @GetMapping
    public ResponseEntity getAllQuestionsByCategory(
            @RequestParam(required = false, name = "category") String category,
            @RequestParam(required = false, name = "quiz") String quiz
    ){
        if(category != null){
//            http://localhost:8080/api/questions?category=Animals
            return new ResponseEntity(questionRepository.findQuestionByCategory(category), HttpStatus.OK);
        }

        if(quiz !=null){
//            http://localhost:8080/api/questions?quiz=Peter%27s%20Quiz
            return new ResponseEntity(questionRepository.findQuestionByQuizzesName(quiz), HttpStatus.OK);
        }
//        http://localhost:8080/api/questions
        return new ResponseEntity(questionRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity postQuestion(@RequestBody Question question){
        questionRepository.save(question);
        return new ResponseEntity(question, HttpStatus.CREATED);
    }

}

