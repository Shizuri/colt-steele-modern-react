import React, { Component } from 'react';

class BrokenClick2 extends Component {
    state = {
        clicked: false
    }

    handleClick = event => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        return (
            <div>
                <h1>{this.state.clicked ? 'Clicked!' : 'Not clicked'}</h1>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    }
}

export default BrokenClick2;