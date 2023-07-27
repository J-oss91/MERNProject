import React, { Component } from 'react';
import QuizData from './QuizData';

export class Quiz extends Component {
  state = {
    userAnswer: null,
    currentIndex: 0,
    options: [],
    quizEnd: false,
    score: 0,
    disabled: true,
    feedback: null, // New state to store feedback message
  };

  // Function to handle user's answer selection and go to the next question
  handleOptionClick = (answer) => {
    const { currentIndex } = this.state;
    const correctAnswer = QuizData[currentIndex].answer;

    // Check if the answer is correct and update feedback message
    const feedback = answer === correctAnswer ? 'Correct!' : 'Incorrect!';

    // Check if the answer is correct and increment the score if needed
    if (answer === correctAnswer) {
      this.setState((prevState) => ({
        score: prevState.score + 1,
      }));
    }

    // Disable options temporarily to prevent multiple selections
    this.setState({ disabled: true, feedback });

    // Delay moving to the next question to allow feedback to be displayed (you can adjust the delay time)
    setTimeout(() => {
      this.nextQuestionHandler();
    }, 1000); // 1 second delay before moving to the next question
  };

  // Function to move to the next question
  nextQuestionHandler = () => {
    const { currentIndex } = this.state;
    if (currentIndex + 1 < QuizData.length) {
      // If there are more questions, move to the next one
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex + 1,
        userAnswer: null,
        disabled: false, // Enable options for the next question
        feedback: null, // Clear feedback message for the next question
      }));
    } else {
      // If there are no more questions, finish the quiz
      this.finishHandler();
    }
  };

  // Function to handle finishing the quiz
  finishHandler = () => {
    this.setState({ quizEnd: true });
  };

  // Function to handle user's radio button selection
  handleRadioChange = (event) => {
    this.setState({
      userAnswer: event.target.value,
      disabled: false, // Enable the "Next" button after the user selects an option
    });
  };

 render() {
  const { currentIndex, quizEnd, feedback } = this.state;

  if (quizEnd) {
    // Render quiz results or a "Quiz completed" message
    return <div>Quiz completed! Your score is {this.state.score}.</div>;
  }

  return (
    <div>
      <h2 style={{ color: feedback === 'Correct!' ? 'green' : 'red' }}>
        {QuizData[currentIndex].question}
      </h2>
      {feedback && <p>{feedback}</p>} {/* Display feedback if available */}
      <ul>
        {QuizData[currentIndex].options.map((option, index) => (
          <li key={index}>
            <input
              type="radio"
              name="option"
              id={`option-${index}`}
              value={option}
              checked={this.state.userAnswer === option}
              onChange={this.handleRadioChange}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </li>
        ))}
      </ul>
      <button
        onClick={this.handleOptionClick.bind(this, this.state.userAnswer)}
        disabled={this.state.disabled}
      >
        Next
      </button>
    </div>
  );
}

}

export default Quiz;
