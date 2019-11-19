import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FoodSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleClick() {
        //Do something
        alert('Saved your food to the Database.');
        //Redirect somewhere else
        this.props.history.push(`/food/${this.state.query}`);
    }

    render() {
        return (
            <div>
                <h1>Search for a food</h1>
                <input
                    type='text'
                    placeholder='search for a food'
                    value={this.state.query}
                    onChange={this.handleChange}
                    name='query'
                />
                <Link to={`/food/${this.state.query}`}>GO!</Link>
                <button onClick={this.handleClick}>Save new food!</button>
            </div>
        );
    }
}

export default FoodSearch;