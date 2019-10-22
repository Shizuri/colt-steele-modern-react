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
        // this.finishedHandler = this.finishedHandler.bind(this);
    }

    addTodoHandler(msg) {
        this.setState(prevState => ({
            messages: [...prevState.messages, <Todo
                message={msg.message}
                key={msg.id}
                id={msg.id}
                removeTodo={this.removeTodoHandler}
                editTodo={this.editTodoHandler}
                finished={this.finishedHandler}
            />]
        }));
    }

    removeTodoHandler(id) {
        this.setState(prevState => ({ messages: prevState.messages.filter(msg => msg.props.id !== id) }));
    }

    editTodoHandler(id) {
        const index = this.state.messages.findIndex(element => element.props.id === id);

        this.setState(prevState => {
            let newMessages = [...prevState.messages];
            newMessages.splice(index, 1, <EditTodo key={id} update={this.updateHandler} id={id} />);
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
            finished={this.finishedHandler}
        />

        this.setState(prevState => {
            let newMessages = [...prevState.messages];
            newMessages.splice(index, 1, updatedTodo);
            return ({ messages: newMessages })
        });
    }

    // finishedHandler(event) {
    //     console.log('finished ', event);
    // }

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