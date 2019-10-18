import React, { Component } from 'react';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: '',
            width: '',
            color: ''
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
        this.props.createNewBox(this.state);
        this.setState({
            height: '',
            width: '',
            color: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='height'>Height</label>
                    <input
                        id='height'
                        name='height'
                        value={this.state.height}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label htmlFor='width'>Width</label>
                    <input
                        id='width'
                        name='width'
                        value={this.state.width}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label htmlFor='color'>Color</label>
                    <input
                        id='color'
                        name='color'
                        value={this.state.color}
                        onChange={this.handleChange}
                    />
                    <button>New Box!</button>
                </form>
            </div>
        );
    }
}

export default NewBoxForm;