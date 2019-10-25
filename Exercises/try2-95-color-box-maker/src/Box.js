import React, { Component } from 'react';

class Box extends Component {
    constructor(props){
        super(props);

        this.removeBoxHandler = this.removeBoxHandler.bind(this);
    }

    removeBoxHandler(){
        this.props.removeBox(this.props.id);
    }

    render() {
        const { height, width, backgroundColor } = this.props;
        const styl = {
            height: `${height}em`,
            width: width + 'em',
            backgroundColor: backgroundColor
        }
        return (
            <div>
                <div style={styl}></div>
                <button onClick={this.removeBoxHandler}>Remove box!</button>
            </div>
            
        );
    }
}

export default Box;