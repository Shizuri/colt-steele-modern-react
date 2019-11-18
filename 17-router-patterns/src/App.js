import React from 'react';
import './App.css';
import Food from './Food';
import { Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Route exact path='/food/:name' render={(routeProps) => <Food authenticated={true} {...routeProps}/>} />

            {/* <Route exact path='/food/:name' component={Food} /> */}

            {/* <Route exact path='/food/:name' render={(routeProps) => <Food {...routeProps}
            stuff={routeProps}/>} /> */}
        </div>
    );
}

export default App;
