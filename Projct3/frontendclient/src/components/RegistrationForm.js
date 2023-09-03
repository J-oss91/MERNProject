import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/userActions';

function RegistrationForm() {
  const dispatch = useDispatch();

  // State to hold user input
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the registerUser action with user data
    dispatch(registerUser(userData));
  };

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button type="submit">Create User</button>
      </div>
    </form>
  );
}

export default RegistrationForm;