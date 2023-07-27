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
  };

  // Function to handle user's answer selection and go to the next question
  handleOptionClick = (answer) => {
    // Check if the answer is correct and increment the score if needed
    if (answer === QuizData[this.state.currentIndex].answer) {
      this.setState((prevState) => ({
        score: prevState.score + 1,
      }));
    }

    // Disable options temporarily to prevent multiple selections
    this.setState({ disabled: true });

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
    const { currentIndex, quizEnd } = this.state;

    if (quizEnd) {
      // Render quiz results or a "Quiz completed" message
      return <div>Quiz completed! Your score is {this.state.score}.</div>;
    }

    return (
      <div>
        <h2>{QuizData[currentIndex].question}</h2>
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
