import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';

function App() {
  return (
    <div className="App">
      <Hello /> 
      <ToggleDetails />
      <ScoreDisplay />
      <TaskList /> 
    </div>
  );
}

export default App;
