import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/** import components */
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import { CheckUserExist } from '../helper/helper.js';

// Import the new components
import RegistrationForm from './RegistrationForm';
import userActions from '../redux/userActions'

/** react routes */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
  },
  {
    path: '/quiz',
    element: <CheckUserExist><Quiz /></CheckUserExist>,
  },
  {
    path: '/result',
    element: <CheckUserExist><Result /></CheckUserExist>,
  },
  {
    path: '/register',
    element: <RegistrationForm />, // Add a route for registration
  },
  {
    path: '/userActions',
    element: <userActions />, // Add a route for the user list
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
