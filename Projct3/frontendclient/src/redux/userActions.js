export const createUser = (userData) => {
  return {
    type: 'CREATE_USER',
    payload: userData,
  };
};

// Assuming you have Redux Thunk middleware set up for asynchronous actions
export const registerUser = (userData) => async (dispatch) => {
  try {
    // Make an API request to register the user
    // Assuming you have a server endpoint for user registration
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const user = await response.json();
      // Dispatch the CREATE_USER action to update the Redux store with the new user data
      dispatch(createUser(user));
    } else {
      // Handle registration error
    }
  } catch (error) {
    // Handle network or other errors
  }
};