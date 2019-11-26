import React, { Component } from 'react';
import Dog from './Dog';
import Nav from './Nav';
import Home from './Home';
import { Route, Switch, Redirect } from 'react-router-dom';

class DogFinder extends Component {
    static defaultProps = {
        dogs: [
            {
                name: "Whiskey",
                age: 5,
                src: "whiskey",
                facts: [
                    "Whiskey loves eating popcorn.",
                    "Whiskey is a terrible guard dog.",
                    "Whiskey wants to cuddle with you!"
                ]
            },
            {
                name: "Hazel",
                age: 3,
                src: "hazel",
                facts: [
                    "Hazel has soooo much energy!",
                    "Hazel is highly intelligent.",
                    "Hazel loves people more than dogs."
                ]
            },
            {
                name: "Tubby",
                age: 4,
                src: "tubby",
                facts: [
                    "Tubby is not the brightest dog",
                    "Tubby does not like walks or exercise.",
                    "Tubby loves eating food."
                ]
            }
        ]
    }

    render() {
        return (
            <div>
                <Nav />

                <Switch>
                    <Route exact path='/dogs/:dogName' render={(routeProps) => <Dog dogs={this.props.dogs} {...routeProps} />} />
                    <Route exact path='/dogs' render={(routeProps) => <Home dogs={this.props.dogs} {...routeProps} />} />
                    <Route render={() => <Redirect to='/dogs' />} />
                </Switch>
            </div>
        );
    }
}

export default DogFinder;