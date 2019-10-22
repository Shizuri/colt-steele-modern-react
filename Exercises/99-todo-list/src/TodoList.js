import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        }

        this.addTodoHandler = this.addTodoHandler.bind(this);
        this.removeTodoHandler = this.removeTodoHandler.bind(this);
    }

    addTodoHandler(message) {
        this.setState(prevState => ({ messages: [...prevState.messages, message] }));
    }

    removeTodoHandler(id) {
        this.setState(prevState => ({ messages: prevState.messages.filter(msg => msg.id !== id) }));
    }

    render() {
        return (
            <div>
                {this.state.messages.map(msg => <Todo message={msg.message} key={msg.id} id={msg.id} removeTodo={this.removeTodoHandler} />)}
                <NewTodoForm addTodo={this.addTodoHandler} />
            </div>
        );
    }
}

export default TodoList;