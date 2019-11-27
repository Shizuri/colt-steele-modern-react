import React, { Component } from 'react';

class Calculation extends Component {
    render() {
        let { calculation, firstNumber, secondNumber} = this.props.match.params;
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);

        console.log(calculation, firstNumber, secondNumber)
        let result = 0;
        switch (calculation) {
            case 'add':
                result = firstNumber + secondNumber;
                break;
            case 'subtract':
                result = firstNumber - secondNumber;
                break;
            case 'multiply':
                result = firstNumber * secondNumber;
                break;
            case 'divide':
                result = firstNumber / secondNumber;
                break;

            default:
                break;
        }

        return (
            <div>
                Calculation: {result}
            </div>
        );
    }
}

export default Calculation