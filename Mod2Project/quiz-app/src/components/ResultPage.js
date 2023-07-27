// import React from 'react';

// const ResultPage = ({ score, userAnswers }) => {
//   // Helper function to determine if an answer is correct or incorrect
//   const isAnswerCorrect = (index) => {
//     return userAnswers[index] === QuizData[index].answer;
//   };

//   return (
//     <div>
//       <h1>Quiz Results</h1>
//       <p>Your score is: {score} points</p>
//       <h2>Answers:</h2>
//       <ul>
//         {QuizData.map((question, index) => (
//           <li
//             key={index}
//             style={{
//               color: isAnswerCorrect(index) ? 'green' : 'red',
//             }}
//           >
//             {question.question} - Your answer: {userAnswers[index]}
//             {isAnswerCorrect(index) ? ' (Correct)' : ' (Incorrect)'}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ResultPage;
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
