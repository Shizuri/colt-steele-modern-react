import React, { Component } from 'react';
import { randomPicker } from './helperMethods';

class BasicBox extends Component {
    static defaultProps = {
        colors: ['PURPLE', 'FUCHSIA', 'NAVY', 'BLUE', 'TEAL', 'AQUA', 'GREEN', 'LIME', 'OLIVE', 'YELLOW', 'MAROON', 'RED', 'BLACK', 'GRAY', 'SILVER']
    }

    constructor(props) {
        super(props);
        this.state = {
            currentColor: randomPicker(this.props.colors)
        }
        this.handleClick = this.handleClick.bind(this);
    }

    changeColor() {
        const oldColor = this.state.currentColor;
        let newColor = randomPicker(this.props.colors);
        while (oldColor === newColor) {
            newColor = randomPicker(this.props.colors);
        }
        this.setState(prevState => ({ currentColor: newColor }));
    }

    handleClick(event) {
        this.changeColor();
    }

    render() {
        let styling = {
            backgroundColor: this.state.currentColor,
            width: '150px',
            height: '150px',
            display: 'inline-block'
        }
        return (
            <div style={styling} onClick={this.handleClick}></div>
        );
    }
}

export default BasicBox;