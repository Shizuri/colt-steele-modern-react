import React from 'react';
import './App.css';
import Food from './Food';
import Meal from './Meal';
import { Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Route exact path='/food/:name' render={(routeProps) => <Food authenticated={true} {...routeProps}/>} />

            {/* <Route exact path='/food/:name' component={Food} /> */}
            {/* ↑ This will not work if you need to pass additional props */}

            {/* <Route exact path='/food/:name' render={(routeProps) => <Food {...routeProps}
            stuff={routeProps}/>} /> */}

            <Route exact path='/food/:foodName/drink/:drinkName' component={Meal}/>
        </div>
    );
}

export default App;
