import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Calculator extends React.Component {
  state = {
    currentNumber: "0",
    leftValue: "",
    rightValue: "",
    operator: "none"
  };

  //when user inputs the value, the digit is concatenated to the previous one. Zero start is an exeption. The starter zero is replaced with first digit.
  handleValueClick = event => {
    this.setState({
      operator: "none",
      currentNumber:
        this.state.currentNumber === "0"
          ? event.target.value
          : this.state.currentNumber + event.target.value
    });
  };

  //user is allowed to provide only one "dot" in the current number
  handleDecimalClick = event => {
    this.setState({
      operator: "none",
      currentNumber: this.state.currentNumber.toString().includes(".")
        ? this.state.currentNumber
        : this.state.currentNumber + event.target.value
    });
  };
//turns numbers and operators into expression (as a string)
  handleOperatorClick = event => {
    this.setState({
      operator: event.target.value,
      leftValue: //memory of the previous numbers and operators in the expression
        this.state.operator === "none"
          ? this.state.leftValue + this.state.rightValue
          : this.state.leftValue,
      rightValue: //last provided number (and, optionaly, operator)
        this.state.operator === "none"
          ? this.state.currentNumber + event.target.value
          : this.state.rightValue.substring(
              0,
              this.state.rightValue.length - 1
            ) + event.target.value, //replaces old operator with new one
      currentNumber: ""//waits for the new number in the expression
    });
  };
  
//calculates the expression
  handleEqualsClick = () => {
    this.setState({
      currentNumber:
        this.state.operator !== "none"
          ? eval(
              this.state.leftValue +
                this.state.rightValue.substring(
                  0,
                  this.state.rightValue.length - 1 //this handles the situation when the expression ends with an operator
                )
            )
          : eval(
              this.state.leftValue +
                this.state.rightValue +
                this.state.currentNumber
            ),
      leftValue: "",
      rightValue: "",
      operator: "none"
    });
  };

  handleClearClick = () => {
    this.setState({
      currentNumber: "0",
      leftValue: "",
      rightValue: "",
      operator: "none"
    });
  };

  render() {
    return (
      <div id="calculator">
        <div id="display">
          {this.state.leftValue}
          {this.state.rightValue}
          {this.state.currentNumber}
        </div>
        <button onClick={this.handleValueClick} id="zero" value={0}>
          0
        </button>
        <button onClick={this.handleValueClick} id="one" value={1}>
          1
        </button>
        <button onClick={this.handleValueClick} id="two" value={2}>
          2
        </button>
        <button onClick={this.handleValueClick} id="three" value={3}>
          3
        </button>
        <button onClick={this.handleValueClick} id="four" value={4}>
          4
        </button>
        <button onClick={this.handleValueClick} id="five" value={5}>
          5
        </button>
        <button onClick={this.handleValueClick} id="six" value={6}>
          6
        </button>
        <button onClick={this.handleValueClick} id="seven" value={7}>
          7
        </button>
        <button onClick={this.handleValueClick} id="eight" value={8}>
          8
        </button>
        <button onClick={this.handleValueClick} id="nine" value={9}>
          9
        </button>
        <button onClick={this.handleOperatorClick} id="add" value="+">
          +
        </button>
        <button onClick={this.handleOperatorClick} id="subtract" value="-">
          -
        </button>
        <button onClick={this.handleOperatorClick} id="multiply" value="*">
          &times;
        </button>
        <button onClick={this.handleOperatorClick} id="divide" value="/">
          &divide;
        </button>
        <button onClick={this.handleDecimalClick} id="decimal" value=".">
          .
        </button>
        <button onClick={this.handleClearClick} id="clear" value="C">
          C
        </button>
        <button onClick={this.handleEqualsClick} id="equals" value="=">
          =
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
