import React, { useState } from 'react';
import './style.css';
import Quiz from './components/Quiz';
import HomePage from './HomePage';
import ResultPage from './ResultPage';
import Banner from './components/Banner';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizEnd, setQuizEnd] = useState(false);
  const [score, setScore] = useState(0);

  const finishHandler = () => {
    setQuizEnd(true);
  };

  const startQuizHandler = () => {
    setQuizStarted(true);
    setQuizEnd(false);
    setScore(0);
  };

  return (
    <div className="App">
      <Banner />
      {quizEnd ? (
        <ResultPage score={score} totalQuestions={QuizData.length} />
      ) : quizStarted ? (
        <Quiz questions={QuizData} finishHandler={finishHandler} />
      ) : (
        <HomePage startQuizHandler={startQuizHandler} />
      )}
    </div>
  );
}

export default App;
