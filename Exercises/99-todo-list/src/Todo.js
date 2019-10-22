import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            finished: false
        }
        this.finish = this.finish.bind(this);
    }

    finish() { //problem seams to be here. style doesn't initialize properly it seams.
        const finished = this.state.finished;
        this.setState(prevState => ({finished: !prevState.finished}));
        if(finished){
            return ({ textDecoration: 'line-through' });
        } else {
            return ({ textDecoration: 'none' });
        }
    }

    render() {
        return (
            <div>
                <span style={this.finish} onClick={this.finish}>{this.props.message}</span>
                <button onClick={() => this.props.editTodo(this.props.id)}>edit</button>
                <button onClick={() => this.props.removeTodo(this.props.id)}>X</button>
            </div>
        );
    }
}

export default Todo;