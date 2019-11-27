import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Calculation from './Calculation';

class RouterCalculator extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/:calculation/:firstNumber/:secondNumber' render={(routerProps) => <Calculation {...routerProps} />} />
                </Switch>
            </div>
        );
    }
}

export default RouterCalculator