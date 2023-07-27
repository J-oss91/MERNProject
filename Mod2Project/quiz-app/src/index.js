import React from 'react';
import ReactDOM from 'react-dom/client';
import Quiz from './components/Quiz';
import './style.css';

function App() {
    return (
        <div className="App">
            <Quiz />
        </div>
    );
};

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App />);
