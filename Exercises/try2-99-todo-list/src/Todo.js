import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.removeTodoHandler = this.removeTodoHandler.bind(this);
        this.editTodoHandler = this.editTodoHandler.bind(this);
        this.finishTodoHandler = this.finishTodoHandler.bind(this);
    }

    removeTodoHandler() {
        this.props.removeTodo(this.props.id);
    }

    editTodoHandler() {
        this.props.editTodo(this.props.id);
    }

    finishTodoHandler() {
        this.props.finishTodo(this.props.id);
    }

    render() {
        return (
            <div>
                <span style={this.props.finished ? { textDecoration: 'line-through', color: 'dodgerblue' } : { textDecoration: 'none', color: 'black' }}
                    onClick={this.finishTodoHandler}>{this.props.message}</span>
                <button onClick={this.editTodoHandler}>Edit</button>
                <button onClick={this.removeTodoHandler}>X</button>
            </div>
        );
    }
}

export default Todo;