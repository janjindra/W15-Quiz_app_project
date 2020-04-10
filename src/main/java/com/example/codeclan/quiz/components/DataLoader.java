package com.example.codeclan.quiz.components;


import com.example.codeclan.quiz.models.Question;
import com.example.codeclan.quiz.models.Quiz;
import com.example.codeclan.quiz.models.User;
import com.example.codeclan.quiz.repositories.QuestionRepository;
import com.example.codeclan.quiz.repositories.QuizRepository;
import com.example.codeclan.quiz.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    QuestionRepository questionRepository;
    @Autowired
    QuizRepository quizRepository;
    @Autowired
    UserRepository userRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args) {

        userRepository.deleteAll();
        quizRepository.deleteAll();
        questionRepository.deleteAll();

        Question question1 = new Question("Mythology", "multiple", "hard", "Talos, the mythical giant bronze man, was the protector of which island?", "Crete");
        questionRepository.save(question1);
        question1.addIncorrectAnswer("Sardinia");
        question1.addIncorrectAnswer("Sicily");
        question1.addIncorrectAnswer("Cyprus");
        questionRepository.save(question1);

        Question question2 = new Question("Animals", "multiple", "medium", "A carnivorous animal eats flesh, what does a nucivorous animal eat?", "Nuts");
        questionRepository.save(question2);
        question2.addIncorrectAnswer("Nothing");
        question2.addIncorrectAnswer("Fruit");
        question2.addIncorrectAnswer("Seaweed");
        questionRepository.save(question2);

        Question question3 = new Question("Entertainment: Music", "multiple", "easy", "Who had a 1969 top 5 hit with the song \'A Boy Named Sue\'", "Johnny Cash");
        questionRepository.save(question3);
        question3.addIncorrectAnswer("Bob Dylan");
        question3.addIncorrectAnswer("Willie Nelson");
        question3.addIncorrectAnswer("Kris Kristofferson");
        questionRepository.save(question3);

        Question question4 = new Question("History", "boolean", "hard", "The Kingdom of Prussia briefly held land in Estonia.", "False");
        questionRepository.save(question4);
        question4.addIncorrectAnswer("True");
        questionRepository.save(question4);


        Question question5 = new Question("Science: Mathematics", "boolean", "medium", "The proof for the Chinese Remainder Theorem used in Number Theory was NOT developed by its first publisher, Sun Tzu.", "True");
        questionRepository.save(question5);
        question5.addIncorrectAnswer("False");
        questionRepository.save(question5);
        //ddd


        User peter = new User("Peter", "Kelly", "peter.kelly@codeclan.com", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsouthernentrepreneurs.uk.com%2Fpeter-kelly%2F&psig=AOvVaw2IYSzWqn7QGIxsnIkfu-Yx&ust=1586612528394000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICN9rT-3egCFQAAAAAdAAAAABAD");
        userRepository.save(peter);

        User jan = new User("Jan", "Jindra", "jan.jindra@codeclan.com", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpjtpartners.com%2Fpeople%2Fpeter-kelly&psig=AOvVaw2IYSzWqn7QGIxsnIkfu-Yx&ust=1586612528394000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICN9rT-3egCFQAAAAAdAAAAABAH");
        userRepository.save(peter);

        Quiz quizA = new Quiz("Peter\'s Quiz", 2, 0, peter);
        quizRepository.save(quizA);

        peter.addQuizToUser(quizA);
        jan.addQuizToUser(quizA);
        userRepository.save(peter);
        userRepository.save(jan);

        quizA.addQuestionToQuiz(question1);
        quizA.addQuestionToQuiz(question2);
        quizRepository.save(quizA);

    }
}

