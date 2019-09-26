import React from 'react';
import './App.css';
// import Pokecard from './Pokecard';
import Pokedex from './Pokedex';
import Pokegame from './Pokegame';

function App() {
  return (
    <div className="App">
      <Pokedex />
      <Pokegame />
    </div>
  );
}

export default App;
