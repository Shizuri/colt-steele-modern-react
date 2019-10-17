import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: ""
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({username: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(`You typed ${this.state.username}`);
        this.setState({username: ""});
    }

    render() {
        return (
            <div>
                <h1>Form Demo for {this.state.username}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text"
                        value={this.state.username} 
                        onChange={this.handleChange}
                        id="username"
                        />
                    <button>Submit!</button>
                </form>
            </div>
        );
    }
}

export default Form;