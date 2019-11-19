import React from 'react';
import './App.css';
import Food from './Food';
import Meal from './Meal';
import { Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/food/:name' render={(routeProps) => <Food authenticated={true} {...routeProps} />} />

                {/* <Route exact path='/food/:name' component={Food} /> */}
                {/* ↑ This will not work if you need to pass additional props */}

                {/* <Route exact path='/food/:name' render={(routeProps) => <Food {...routeProps} stuff={routeProps}/>} /> */}

                <Route exact path='/food/:foodName/drink/:drinkName' component={Meal} />
                <Route exact path='/' render={() => <h1>Home page.</h1>}/>
                <Route render={() => <h1>ERROR! PAGE NOT FOUND!</h1>} />
            </Switch>
        </div>
    );
}

export default App;
