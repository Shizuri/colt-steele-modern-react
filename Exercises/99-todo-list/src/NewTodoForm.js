import React, { Component } from 'react';
import uuid from 'uuid/v4';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            id: uuid()
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            message: '',
            id: uuid()
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='todo'>New Todo</label>
                    <input
                        type='text'
                        id='todo'
                        name='message'
                        value={this.state.message}
                        onChange={this.handleChange}
                    />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default NewTodoForm;