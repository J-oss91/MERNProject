const initialState = {
    users: [], // Initialize an array to store user data
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CREATE_USER':
        return {
          ...state,
          users: [...state.users, action.payload], // Add the new user data to the array
        };
      // ... other cases
      default:
        return state;
    }
  };
  
  export default userReducer;