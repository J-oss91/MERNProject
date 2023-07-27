import React, { useState, useEffect } from 'react';
import './style.css';
import { QuizData } from './QuizData'; 
import Quiz from './components/Quiz'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [quizEnd, setQuizEnd] = useState(false);
  const [score, setScore] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [quizStarted, setQuizStarted] = useState(false); 

  const loadQuiz = () => {
    const currentQuestion = QuizData[currentIndex];
    setOptions(currentQuestion.options);
    setUserAnswer(null);
  };

  const checkAnswer = (answer) => {
    setUserAnswer(answer);
    setDisabled(false);
  };

  const nextQuestionHandler = () => {
    
    if (userAnswer === QuizData[currentIndex].answer) {
      setScore(score + 1);
    }

    setCurrentIndex(currentIndex + 1);
    setUserAnswer(null);
    setDisabled(true);
  };

 
  const finishHandler = () => {
    if (currentIndex === QuizData.length - 1) {
      setQuizEnd(true);
    }
  };


  const startQuizHandler = () => {
    setQuizStarted(true);
    setDisabled(false); 
  };

  // Load the quiz when the component mounts or when currentIndex changes
  useEffect(() => {
    if (currentIndex < QuizData.length && quizStarted) { // Only load the quiz if it has started
      loadQuiz();
    }
  }, [currentIndex, quizStarted]);

  if (quizEnd) {
    return (
      <div>
        <h1>Game Over. Final score is {score} points</h1>
        <p>The correct Answers for the quiz are</p>
        <ul>
          {QuizData.map((item, index) => (
            <li className='ui floating message options' key={index}>
              {item.answer}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (!quizStarted) {
    return (
      <div>
        <h2>Welcome to the Quiz App</h2>
        <button onClick={startQuizHandler}>Start Quiz</button>
      </div>
    );
  }

  if (QuizData.length === 0) {
    return <div>No quiz data available.</div>;
  }

  return (
    <div>
      <Quiz
        question={QuizData[currentIndex].question}
        options={QuizData[currentIndex].options}
        currentIndex={currentIndex}
        userAnswer={userAnswer}
        quizEnd={quizEnd}
        score={score}
        disabled={disabled}
        checkAnswer={checkAnswer}
        nextQuestionHandler={nextQuestionHandler}
        finishHandler={finishHandler}
      />
    </div>
  );
}

export default App;
