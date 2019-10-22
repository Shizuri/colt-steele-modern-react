import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return(
            <div>
                <span>{this.props.message}</span>
                <button onClick={() => this.props.removeTodo(this.props.id)}>X</button>
            </div>
        );
    }
}

export default Todo;