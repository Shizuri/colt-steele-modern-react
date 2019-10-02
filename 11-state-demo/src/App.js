import React from 'react';
import Game from './Game';
import Rando from './Rando';
import './App.css';

function App() {
  return (
    <div className="App">
      <Rando maxNum={7}/>
    </div>
  );
}

export default App;
