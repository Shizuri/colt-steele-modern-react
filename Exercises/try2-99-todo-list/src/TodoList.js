import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import uuid from 'uuid/v4';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            updatedMesage: ''
        }

        this.createTodo = this.createTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.finishTodo = this.finishTodo.bind(this);
    }

    createTodo(message) {
        const id = uuid();
        const newTodo = {
            message: message,
            id: id,
            editingNow: false,
            finished: false
        }

        this.setState(prevState => {
            return ({
                todos: [...prevState.todos, newTodo]
            });
        })
    }

    removeTodo(todoId) {
        const remainingTodos = this.state.todos.filter(todo => todo.id !== todoId);
        this.setState({ todos: remainingTodos });
    }

    editTodo(todoId) {
        let prevMessage = '';
        let updated = [...this.state.todos].map(todo => {
            if(todo.id === todoId){
                todo.editingNow = true;
                prevMessage = todo.message;
            }
            return todo
        });
        this.setState({ todos: updated, updatedMesage: prevMessage});
    }

    updateTodo(event) {
        event.preventDefault();
        let updated = [...this.state.todos].map(todo => {
            if(todo.id === event.target.id){
                todo.editingNow = false;
                todo.message = this.state.updatedMesage;
            }
            return todo
        });
        this.setState({
            todos: updated,
            updatedMesage: ''
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    finishTodo(todoId) {
        let newTodos = [...this.state.todos].map(todo => {
            if(todo.id === todoId){
                todo.finished = !todo.finished;
            }
            return todo;
        })
        this.setState({todos: newTodos});
    }

    render() {
        const todoElements = this.state.todos.map(todo =>
            !todo.editingNow
                ? <Todo
                    message={todo.message}
                    id={todo.id}
                    key={todo.id}
                    removeTodo={this.removeTodo}
                    editTodo={this.editTodo}
                    finishTodo={this.finishTodo}
                    finished={todo.finished}
                />
                : <form onSubmit={this.updateTodo} key={todo.id} id={todo.id}>
                    <label>New message: </label>
                    <input
                        type='text'
                        id='updatedMesage'
                        name='updatedMesage'
                        placeholder='update todo'
                        value={this.state.updatedMesage}
                        onChange={this.handleChange}
                    />
                    <button>Update</button>
                </form>)

        return (
            <div>
                <h1>A simple Todo List</h1>
                {todoElements}
                <NewTodoForm message={this.createTodo} />
            </div>
        );
    }
}

export default TodoList;