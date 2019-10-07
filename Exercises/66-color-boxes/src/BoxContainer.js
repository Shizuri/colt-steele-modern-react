import React, { Component } from 'react';
import { randomPicker } from './helperMethods';
import Box from './Box';

class BoxContainer extends Component {
    static defaultProps = {
        colors: ['PURPLE', 'FUCHSIA', 'NAVY', 'BLUE', 'TEAL', 'AQUA', 'GREEN', 'LIME', 'OLIVE', 'YELLOW', 'MAROON', 'RED', 'BLACK', 'GRAY', 'SILVER']
    }

    constructor(props) {
        super(props);
        this.state = {
            box1: randomPicker(this.props.colors),
            box2: randomPicker(this.props.colors),
            box3: randomPicker(this.props.colors),
            box4: randomPicker(this.props.colors),
            box5: randomPicker(this.props.colors),
            box6: randomPicker(this.props.colors),
            box7: randomPicker(this.props.colors),
            box8: randomPicker(this.props.colors),
            box9: randomPicker(this.props.colors),
            box10: randomPicker(this.props.colors),
            box11: randomPicker(this.props.colors),
            box12: randomPicker(this.props.colors),
            box13: randomPicker(this.props.colors),
            box14: randomPicker(this.props.colors),
            box15: randomPicker(this.props.colors),
            box16: randomPicker(this.props.colors),
            box17: randomPicker(this.props.colors),
            box18: randomPicker(this.props.colors),
        }
    }

    render() {
        return (
            <div>
                <Box color={this.state.box1} />
                <Box color={this.state.box2} />
                <Box color={this.state.box3} />
                <Box color={this.state.box4} />
                <Box color={this.state.box5} />
                <Box color={this.state.box6} />
                <Box color={this.state.box7} />
                <Box color={this.state.box8} />
                <Box color={this.state.box9} />
                <Box color={this.state.box10} />
                <Box color={this.state.box11} />
                <Box color={this.state.box12} />
                <Box color={this.state.box13} />
                <Box color={this.state.box14} />
                <Box color={this.state.box15} />
                <Box color={this.state.box16} />
                <Box color={this.state.box17} />
                <Box color={this.state.box18} />
            </div>
        );
    }
}

export default BoxContainer;