import React, { Component } from 'react';
import Jogurt from './Jogurt';
import Stake from './Stake';
import Mushrooms from './Mushrooms';
import Home from './Home';
import { Route, Switch, NavLink } from 'react-router-dom';
import './VendingMachine.css'

class VendingMachine extends Component {
    render() {
        return(
            <div>
                <nav className='VM-nav-bar'>
                    <NavLink activeClassName='VM-nav-active-link' exact to='/'>Home</NavLink>
                    <NavLink activeClassName='VM-nav-active-link' exact to='/jogurt'>Jogurt</NavLink>
                    <NavLink activeClassName='VM-nav-active-link' exact to='/mushrooms'>Mushrooms</NavLink>
                    <NavLink activeClassName='VM-nav-active-link' exact to='/stake'>Stake</NavLink>
                </nav>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/jogurt' component={Jogurt} />
                    <Route exact path='/mushrooms' component={Mushrooms} />
                    <Route exact path='/stake' component={Stake} />
                </Switch>
            </div>
        );
    }
}

export default VendingMachine;