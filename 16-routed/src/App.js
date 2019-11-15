import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Dog from './Dog';
import Contact from './Contact';
import About from './About';
import './App.css';

const Hater = () => <h1>I ABOSOLUTELY HATE DOGS!</h1>

class App extends Component {
    render() {
        return (
            <div className="App">
                <nav className='App-nav'>
                    <Link className='App-link' to='/'>About</Link>
                    <Link className='App-link' to='/dog'>Dog</Link>
                    <Link className='App-link' to='/contact'>Contact</Link>
                    <hr />
                    <a href="/dog">Dog</a>
                    <a href="/contact">Contact</a>
                    <a href="/">About</a>
                </nav>
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
