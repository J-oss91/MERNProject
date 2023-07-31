import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
import Quiz from './components/Quiz';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';

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
        <Switch>
         
          <Route path="/result">
            <ResultPage score={score} totalQuestions={QuizData.length} />
          </Route>

         
          <Route path="/quiz">
            <Quiz questions={QuizData} finishHandler={finishHandler} />
          </Route>

         
          <Route exact path="/">
            <HomePage startQuizHandler={startQuizHandler} />
          </Route>
        </Switch>
      </Router>
      {quizEnd && <p>Quiz has ended!</p>}
      {quizStarted && <p>Quiz is in progress...</p>}
    </div>
  );
}

export default App;

