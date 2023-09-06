// components/Main.js
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserId } from '../redux/result_reducer';
import { createUser } from '../redux/userActions'; // Import the createUser action
import '../styles/Main.css';

export default function Main() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  }

  // Function to handle user creation
  function handleCreateUser() {
    const username = inputRef.current?.value;
    if (username) {
      // Dispatch the createUser action with user data
      dispatch(createUser({ username }));
      // Clear the input field or perform any other necessary actions
      inputRef.current.value = '';
    }
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      <ol>
        <li>You will be asked 10 questions one after another.</li>
        <li>10 points are awarded for the correct answer.</li>
        <li>Each question has three options. You can choose only one option.</li>
        <li>You can review and change answers before the quiz finishes.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>

      <form id="form">
        <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
      </form>

      <div className='start'>
        <Link className='btn' to={'quiz'} onClick={startQuiz}>
          Start Quiz
        </Link>
        <button className='btn' onClick={handleCreateUser}>
          Create User
        </button>
      </div>
    </div>
  );
}
