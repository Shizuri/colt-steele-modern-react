import React, { Component } from 'react';

class Button extends Component {
    render(){
        return(
            <button onClick={() => {alert('I have been clicked!')}}>Click me!</button>
        );
    }
}

export default Button;