package com.example.codeclan.quiz.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="questions")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "category")
    private String category;

    @Column(name = "type")
    private String type;

    @Column(name = "difficulty")
    private String difficulty;

    @Column(name = "question_name")
    private String questionName;

    @Column(name = "correct_answer")
    private String correctAnswer;

    @Column(name= "incorrect_answers")
    private ArrayList<String> incorrectAnswers;

    @JsonBackReference
    @ManyToMany
    @JoinTable(name="questions_quizzes", joinColumns = { @JoinColumn(name="question_id", nullable = false, updatable = false)},
            inverseJoinColumns = { @JoinColumn(name = "quiz_id", nullable = false, updatable = false)})
    private List<Quiz> quizzes;


    public Question(String category, String type, String difficulty, String questionName, String correctAnswer) {
        this.category = category;
        this.type = type;
        this.difficulty = difficulty;
        this.questionName = questionName;
        this.correctAnswer = correctAnswer;
        this.incorrectAnswers =  new ArrayList<>();
        this.quizzes = new ArrayList<>();
    }

    public Question() {
    }

    public void addIncorrectAnswer(String incorrectAnswer){
        this.incorrectAnswers.add(incorrectAnswer);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public String getQuestionName() {
        return questionName;
    }

    public void setQuestionName(String questionName) {
        this.questionName = questionName;
    }

    public List<String> getIncorrectAnswers() {
        return incorrectAnswers;
    }

    public void setIncorrectAnswers(ArrayList<String> incorrectAnswers) {
        this.incorrectAnswers = incorrectAnswers;
    }

    public String getCorrectAnswer() {
        return correctAnswer;
    }

    public void setCorrectAnswer(String correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    public List<Quiz> getQuizzes() {
        return quizzes;
    }

    public void setQuizzes(List<Quiz> quizzes) {
        this.quizzes = quizzes;
    }
}
