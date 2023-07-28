import React from 'react';

const ResultPage = ({ score, totalQuestions }) => {
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>Your final score is: {score} out of {totalQuestions}</p>
    </div>
  );
};

export default ResultPage;
