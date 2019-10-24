import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            finished: false
        }
        this.finish = this.finish.bind(this);
    }

    finish() {
        this.setState(prevState => ({ finished: !prevState.finished }));
    }

    getFinishedStyle() {
        if (this.state.finished) {
            return ({ textDecoration: 'line-through' });
        } else {
            return ({ textDecoration: 'none' });
        }
    }

    render() {
        return (
            <div>
                <span style={this.getFinishedStyle()} onClick={this.finish}>{this.props.message}</span>
                <button onClick={() => this.props.editTodo(this.props.id)}>edit</button>
                <button onClick={() => this.props.removeTodo(this.props.id)}>X</button>
            </div>
        );
    }
}

export default Todo;