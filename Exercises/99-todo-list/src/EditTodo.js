import React, { Component } from 'react';

class EditTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            id: this.props.id,
            finished: this.props.finished
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.update(this.state);
        this.setState({
            message: '',
            id: '',
            finished: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    id='message'
                    name='message'
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button>Update</button>
            </form>
        );
    }
}

export default EditTodo;