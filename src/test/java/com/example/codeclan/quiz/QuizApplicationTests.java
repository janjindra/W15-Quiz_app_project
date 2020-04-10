package com.example.codeclan.quiz;

import com.example.codeclan.quiz.models.Question;
import com.example.codeclan.quiz.repositories.QuestionRepository;
import com.example.codeclan.quiz.repositories.QuizRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class QuizApplicationTests {

	@Autowired
	QuestionRepository questionRepository;

	@Autowired
	QuizRepository quizRepository;


	@Test
	void contextLoads() {
	}

	@Test
	public void canAddIncorrectAnswersToArrayList(){
		Question question3 = new Question("Entertainment: Music", "multiple", "easy", "Who had a 1969 top 5 hit with the song \'A Boy Named Sue\'", "Johnny Cash");
		questionRepository.save(question3);
		question3.addIncorrectAnswer("Bob Dylan");
		question3.addIncorrectAnswer("Willie Nelson");
		question3.addIncorrectAnswer("Kris Kristofferson");
		questionRepository.save(question3);
		assertEquals(3,question3.getIncorrectAnswers().size());


	}

}
