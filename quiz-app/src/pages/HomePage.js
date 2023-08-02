// import React from 'react';
// import { Link } from 'react-router-dom'
// import Header from '../components/Header';

// const HomePage = ({ startQuizHandler }) => {
//   return (
//     <div>
//       <Header />
//     <h2>Welcome to the Quiz App</h2>
//     <p>Click the button below to start the quiz!</p>
//     <Link to="/quiz">Start Quiz</Link>
//   </div>
//   );
// };

// export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const HomePage = ({ startQuizHandler }) => {
  return (
    <div>
      <Header />
      <h2>Welcome to the Quiz App</h2>
      <p>Click the button below to start the quiz!</p>
      <Link to="/quiz">Start Quiz</Link>
    </div>
  );
};

export default HomePage;

