import React, { Component } from 'react';

class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: ''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    onChangeHandler(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    submitHandler(event) {
        event.preventDefault();
        this.props.message(this.state.message);
        this.setState({message: ''});
    }

    render() {
        return(
            <form onSubmit={this.submitHandler}>
                <label>New Todo:</label>
                <input
                    type='text'
                    id='message'
                    name='message'
                    value={this.state.message}
                    onChange={this.onChangeHandler}
                />
                <button>Add Todo</button>
            </form>
        );
    }
}

export default NewTodoForm;