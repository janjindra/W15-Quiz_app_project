package com.example.codeclan.quiz.repositories;

import com.example.codeclan.quiz.models.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

    List<Question> findQuestionByCategory(String category);

    List<Question> findQuestionByQuizzesName(String quizName);


}
