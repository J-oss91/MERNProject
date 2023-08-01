// import React from 'react';
// import { Link } from 'react-router-dom';

// const ResultPage = ({ score, totalQuestions }) => {
//   return (
//     <div>
//       <h2>Quiz Completed!</h2>
//       <p>Your final score is: {score} out of {totalQuestions}</p>
//       <Link to="/quiz/completion">Show Results</Link>
//     </div>
//   );
// };

// export default ResultPage;

import React from 'react';
import { Link } from 'react-router-dom';

const ResultPage = ({ score, totalQuestions }) => {
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>Your final score is: {score} out of {totalQuestions}</p>
      <Link to="/quiz/completion">Show Results</Link>
    </div>
  );
};

export default ResultPage;

