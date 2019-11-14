import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dog from './Dog';
import Contact from './Contact';
import About from './About';
import './App.css';

const Hater = () => <h1>I ABOSOLUTELY HATE DOGS!</h1>

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path='/' component={About} />
                    <Route exact path='/dog' component={Dog} />
                    <Route exact path='/dog/hater' component={Hater} />
                    <Route exact path='/contact' component={Contact} />
                </Switch>
            </div>
        );
    }
}

export default App;
