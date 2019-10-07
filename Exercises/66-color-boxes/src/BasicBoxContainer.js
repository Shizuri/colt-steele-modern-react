import React, { Component } from 'react';
import BasicBox from './BasicBox';

class BasicBoxContainer extends Component {
    render() {
        let boxes = [];
        for (let i = 0; i < 18; i++) {
            boxes.push(<BasicBox />);
        }

        return (
            <div>
                {boxes.map(box => <span>{box}</span>)}
            </div>
        );
    }
}

export default BasicBoxContainer;