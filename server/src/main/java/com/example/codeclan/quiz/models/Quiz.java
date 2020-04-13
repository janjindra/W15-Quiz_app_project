package com.example.codeclan.quiz.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="quizzes")
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "number_of_questions")
    private int numberOfQuestions;

    @Column(name = "total_score")
    private int totalScore;

    @ManyToMany
    @JoinTable(
            name = "questions_quizzes",
            joinColumns = { @JoinColumn(
                    name = "quiz_id",
                    nullable = false,
                    updatable = false)
            },
            inverseJoinColumns = { @JoinColumn(
                    name = "question_id",
                    nullable = false,
                    updatable = false)
            })
    private List<Question> questions;

//    @ManyToOne
//    @JoinColumn(name = "user_id", nullable = false)
//    private User user;

    public Quiz(String name) {
        this.name = name;
        this.numberOfQuestions = numberOfQuestions;
        this.totalScore = totalScore;
        this.questions = new ArrayList<>();
//        this.user = user;
    }

    public Quiz() {
    }

    public void addQuestionToQuiz(Question question){
        this.questions.add(question);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNumberOfQuestions() {
        return numberOfQuestions;
    }

    public void setNumberOfQuestions(int numberOfQuestions) {
        this.numberOfQuestions = numberOfQuestions;
    }

    public int getTotalScore() {
        return totalScore;
    }

    public void setTotalScore(int totalScore) {
        this.totalScore = totalScore;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
}
