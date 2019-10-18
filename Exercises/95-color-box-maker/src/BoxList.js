import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import uuid from 'uuid/v4';

class BoxList extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxes: []
        }

        this.createNewBoxHandler = this.createNewBoxHandler.bind(this);
        this.removeBoxHandler = this.removeBoxHandler.bind(this);
    }

    createNewBoxHandler(boxValues) {
        const randomKey = uuid();
        const newBox = <Box height={boxValues.height} width={boxValues.width} color={boxValues.color} key={randomKey} id={randomKey} removeBox={this.removeBoxHandler}/>
        this.setState(prevState =>({
            boxes: [...prevState.boxes, newBox]
        }))
    }

    removeBoxHandler(boxID){
        const result = this.state.boxes.filter(box => box.key !== boxID);
        this.setState({boxes: result});
    }

    render() {
        return (
            <div>
                <NewBoxForm createNewBox={this.createNewBoxHandler}/>
                {this.state.boxes.map(box => box)}
            </div>
        );
    }
}

export default BoxList;