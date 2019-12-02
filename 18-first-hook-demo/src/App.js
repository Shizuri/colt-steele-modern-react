import React from 'react';
import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';
import Toggler from './Toggler';
import './App.css';

function App() {
  return (
    <div className="App">
      <CounterClass />
      <hr />
      <CounterHooks />
      <hr />
      <Toggler />
    </div>
  );
}

export default App;
