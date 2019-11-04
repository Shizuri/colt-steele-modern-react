import React from 'react';
import Timer from './Timer';
import './App.css';
import ZenQuote from './ZenQuote';
import GithubUserInfo from './GithubUserInfo';

function App() {
  return (
    <div className="App">
      <ZenQuote />
      {/* <GithubUserInfo username="facebook"/>
      <GithubUserInfo username="colt"/>
      <GithubUserInfo username="Shizuri"/> */}
    </div>
  );
}

export default App;
