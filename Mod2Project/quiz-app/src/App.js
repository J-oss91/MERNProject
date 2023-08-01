import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import Quiz from './components/Quiz';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';
import QuizData from './components/QuizData';

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
      <Router>
        <Routes>
          <Route path="/" element={<HomePage startQuizHandler={startQuizHandler} />} />
          <Route path="/quiz" element={<Quiz questions={QuizData} finishHandler={finishHandler} />} />
          <Route path="/result" element={<ResultPage score={score} totalQuestions={QuizData.length} />} />
        </Routes>
      </Router>
      {quizEnd && <p>Quiz has ended!</p>}
      {quizStarted && <p>Quiz is in progress...</p>}
    </div>
  );
}

export default App;


