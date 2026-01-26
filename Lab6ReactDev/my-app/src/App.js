import React from 'react';
import './App.css';
import Hello from './Hello';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import UserList from './UserList';
import TimerCounter from './TimerCounter';

function App() {
  return (
    <div className="App">
      <Hello /> 
      <ToggleDetails />
      <ScoreDisplay score={50}/>
      <TaskList /> 
      <UserList />
      <TimerCounter />
    </div>
  );
}

export default App;