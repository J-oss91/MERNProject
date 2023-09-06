Quiz Application
The Quiz Application is a web-based application built using React and Redux that allows users to take quizzes consisting of multiple-choice questions. The application calculates and displays the user's quiz results, including total points, total attempts, earned points, and whether the user passed or failed. Additionally, a detailed results table shows each question, the user's answer, and whether the answer was correct.

Table of Contents
Features
Prerequisites
Getting Started
Application Structure
Usage

Features
1. Take Quizzes
Users can take quizzes consisting of multiple-choice questions.
2. Quiz Results
The application calculates and displays the user's quiz results, including:
Total points earned.
Total attempts made.
Whether the user passed or failed the quiz.
3. Restart Quiz
Users can restart the quiz at any time to try again.
4. Detailed Results
A table displays detailed results for each question, including:
The user's answer.
Whether the answer was correct.
Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js: Make sure you have Node.js installed on your machine. You can download it from nodejs.org.
Getting Started

To set up and run the Quiz Application, follow these steps:
Clone the Repository:

bash
Copy code
git clone <https://github.com/J-oss91/MERNProject.git>
Install Dependencies:

Navigate to the project directory and install the required dependencies using npm or yarn:

bash
Copy code
cd quiz-application
npm install
Run the Application:

Start the application locally:

bash
Copy code
npm start
The application will be accessible at http://localhost:3000 by default.

Explore the Application:

Open your web browser and visit http://localhost:3000 to explore and use the Quiz Application.

Application Structure
The application is structured as follows:

src/: Contains the application source code.
components/: React components used to build the user interface.
redux/: Redux-related files, including reducers and actions.
helper/: Utility functions and helper files.
styles/: CSS styles for the application.
App.js: The main application component.
Usage
Taking a Quiz:

Visit the application and click on the "Take Quiz" button.
Answer the multiple-choice questions presented.
Click the "Next" button to view your results.
Viewing Quiz Results:

After submitting the quiz, you can view your results, including total points, attempts, and whether you passed or failed.
Restarting the Quiz:

To retry the quiz, click the "Restart Quiz" button.
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fa
