import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import EditTodo from './EditTodo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        }

        this.addTodoHandler = this.addTodoHandler.bind(this);
        this.removeTodoHandler = this.removeTodoHandler.bind(this);
        this.editTodoHandler = this.editTodoHandler.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        this.finishHandler = this.finishHandler.bind(this);
    }

    addTodoHandler(msg) {
        this.setState(prevState => ({
            messages: [...prevState.messages, <Todo
                message={msg.message}
                key={msg.id}
                id={msg.id}
                removeTodo={this.removeTodoHandler}
                editTodo={this.editTodoHandler}
                finished={false}
                finish={this.finishHandler}
            />]
        }));
    }

    removeTodoHandler(id) {
        this.setState(prevState => ({ messages: prevState.messages.filter(msg => msg.props.id !== id) }));
    }

    editTodoHandler(id) {
        const index = this.state.messages.findIndex(element => element.props.id === id);
        const todo = this.state.messages.filter(element => element.props.id === id)[0];

        this.setState(prevState => {
            let newMessages = [...prevState.messages];
            newMessages.splice(index, 1, <EditTodo key={id} update={this.updateHandler} id={id} finished={todo.props.finished} />);
            return ({ messages: newMessages })
        });
    }

    updateHandler(updatedValue) {
        const index = this.state.messages.findIndex(element => element.props.id === updatedValue.id);
        const updatedTodo = <Todo
            message={updatedValue.message}
            key={updatedValue.id}
            id={updatedValue.id}
            removeTodo={this.removeTodoHandler}
            editTodo={this.editTodoHandler}
            finished={updatedValue.finished}
            finish={this.finishHandler}
        />

        this.setState(prevState => {
            let newMessages = [...prevState.messages];
            newMessages.splice(index, 1, updatedTodo);
            return ({ messages: newMessages })
        });
    }

    finishHandler(id) {
        const index = this.state.messages.findIndex(element => element.props.id === id);
        const todo = this.state.messages.filter(element => element.props.id === id)[0];

        const updatedTodo = <Todo
            message={todo.props.message}
            key={todo.props.id}
            id={todo.props.id}
            removeTodo={this.removeTodoHandler}
            editTodo={this.editTodoHandler}
            finished={!todo.props.finished}
            finish={this.finishHandler}
        />

        this.setState(prevState => {
            let newMessages = [...prevState.messages];
            newMessages.splice(index, 1, updatedTodo);
            return ({ messages: newMessages })
        });
    }

    render() {
        return (
            <div>
                {this.state.messages.map(msg => msg)}
                <NewTodoForm addTodo={this.addTodoHandler} />
            </div>
        );
    }
}

export default TodoList;