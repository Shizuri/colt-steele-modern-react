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
                <div className="navbar navbar-expand-md bg-dark navbar-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className='navbar-nav'>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName='VM-active' to='/' exact>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  activeClassName='VM-active' to='/soda' exact>Soda</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  activeClassName='VM-active' to='/chips' exact>Chips</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  activeClassName='VM-active' to='/sardines' exact>Sardines</NavLink>
                            </li>
                        </ul>
                    </div>
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