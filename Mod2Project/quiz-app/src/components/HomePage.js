import React from 'react';

const HomePage = ({ startQuizHandler }) => {
  return (
    <div>
      <h2>Welcome to the Quiz App</h2>
      <p>Click the button below to start the quiz!</p>
      <button onClick={startQuizHandler}>Start Quiz</button>
    </div>
  );
};

export default HomePage;

