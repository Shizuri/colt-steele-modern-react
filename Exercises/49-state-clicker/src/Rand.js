import React, { Component } from 'react';
import './Rand.css';

class Rand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        }
        this.randomNumberHandler = this.randomNumberHandler.bind(this);
    }

    randomNumberHandler(event) {
        const randomNumber = Math.floor(Math.random() * 10 + 1);
        this.setState({ num: randomNumber });
    }

    render() {
        let output = <button onClick={this.randomNumberHandler}>New random number</button>
        if (this.state.num === 7) {
            output = <p className='Rand-Winner'>YOU WIN!</p>
        }

        return (
            <div className='Rand'>
                <h1>Number is: {this.state.num}</h1>
                {output}
            </div>
        );
    }
}

export default Rand;