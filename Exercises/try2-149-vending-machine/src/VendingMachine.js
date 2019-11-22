import React, { Component } from 'react';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';
import Home from './Home';
import { Route, Switch, NavLink } from 'react-router-dom';
import './VendingMachine.css';

class VendingMachine extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavLink activeClassName='VM-active' to='/' exact>Home</NavLink>
                    <NavLink activeClassName='VM-active' to='/soda' exact>Soda</NavLink>
                    <NavLink activeClassName='VM-active' to='/chips' exact>Chips</NavLink>
                    <NavLink activeClassName='VM-active' to='/sardines' exact>Sardines</NavLink>
                </div>

                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/soda' component={Soda} />
                    <Route exact path='/chips' render={() => <Chips aProp='this is a prop' />} />
                    <Route exact path='/sardines' component={Sardines} />
                </Switch>
            </div>
        );
    }
}

export default VendingMachine;