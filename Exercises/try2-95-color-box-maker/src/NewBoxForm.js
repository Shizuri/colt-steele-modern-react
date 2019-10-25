import React, { Component } from 'react';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: '',
            width: '',
            backgroundColor: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.makeBox(this.state);
        this.setState({
            height: '',
            width: '',
            backgroundColor: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='height'>Height:</label>
                <input
                    type='number'
                    id='height'
                    name='height'
                    value={this.state.height}
                    onChange={this.handleChange}
                />
                <label htmlFor='width'>Width:</label>
                <input
                    type='number'
                    id='width'
                    name='width'
                    value={this.state.width}
                    onChange={this.handleChange}
                />
                <label htmlFor='backgroundColor'>Background color:</label>
                <input
                    type='text'
                    id='backgroundColor'
                    name='backgroundColor'
                    value={this.state.backgroundColor}
                    onChange={this.handleChange}
                />
                <button>Make a box!</button>
            </form>
        );
    }
}

export default NewBoxForm;