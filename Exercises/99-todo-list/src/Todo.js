import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    }

    handleRemoveTodo() {
        this.props.removeTodo(this.props.id);
    }

    render() {
        return (
            <div>
                <span style={this.props.finished
                    ? { textDecoration: 'line-through' }
                    : { textDecoration: 'none' }}
                    onClick={() => this.props.finish(this.props.id)}>{this.props.message}</span>
                <button onClick={() => this.props.editTodo(this.props.id)}>edit</button>
                <button onClick={this.handleRemoveTodo}>X</button>
            </div>
        );
    }
}

export default Todo;