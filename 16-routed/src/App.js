import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
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
                    <NavLink exact activeClassName='App-active-link' className='App-link' to='/'>About</NavLink>
                    <NavLink exact activeClassName='App-active-link' className='App-link' to='/dog'>Dog</NavLink>
                    <NavLink exact activeClassName='App-active-link' className='App-link' to='/dog/r'>Dog(r)</NavLink>
                    <NavLink exact activeClassName='App-active-link' className='App-link' to='/dog/c'>Dog(c)</NavLink>
                    <NavLink exact activeClassName='App-active-link' className='App-link' to='/contact'>Contact</NavLink>
                </nav>
                <Switch>
                    <Route exact path='/' component={About} />
                    <Route exact path='/dog/c' component={() => <Dog name='Muffins'/>} />
                    <Route exact path='/dog/r' render={() => <Dog name='Biscuits'/>} />
                    <Route exact path='/dog/hater' component={Hater} />
                    <Route exact path='/contact' component={Contact} />
                </Switch>
            </div>
        );
    }
}

export default App;
