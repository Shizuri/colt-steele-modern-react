import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import uuid from 'uuid/v4';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        }

        this.makeBox = this.makeBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }

    makeBox(boxValues) {
        const id = uuid();
        this.setState(prevState => {
            return ({
                boxes: [...prevState.boxes,
                {
                    height: boxValues.height,
                    width: boxValues.width,
                    backgroundColor: boxValues.backgroundColor,
                    id: id
                }]
            })
        });
    }

    removeBox(boxId) {
        const leftOverBoxes = this.state.boxes.filter(box => box.id !== boxId);
        this.setState({boxes: leftOverBoxes});
    }

    render() {
        return (
            <div>
                <h1>Create a box</h1>
                <NewBoxForm makeBox={this.makeBox} />
                {this.state.boxes.map(box => <Box
                    height={box.height}
                    width={box.width}
                    backgroundColor={box.backgroundColor}
                    key={box.id}
                    id={box.id}
                    removeBox={this.removeBox}
                />)}
            </div>
        );
    }
}

export default BoxList;