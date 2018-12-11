import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Calculator extends React.Component {
  state = {
    currentNumber: "0",
    formula: "",
    result: "",
    leftValue: "",
    rightValue: "",
    operator: "none"
  };
  handleValueClick = event => {
    this.setState({
      currentNumber:
        this.state.currentNumber === "0"
          ? event.target.value
          : this.state.currentNumber + event.target.value
    });
  };

  handleDecimalClick = event => {
    this.setState({
      currentNumber: this.state.currentNumber.includes(".")
        ? this.state.currentNumber
        : this.state.currentNumber + event.target.value
    });
  };

  handleAddClick = event => {
    this.setState({
      currentNumber: this.state.currentNumber[this.state.currentNumber.length-1]==="+"
        ? this.state.currentNumber
        : this.state.currentNumber + event.target.value
    });
  };

  render() {
    return (
      <div id="calculator">
        <div id="display">{this.state.currentNumber}</div>
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
        <button onClick={this.handleAddClick} id="add" value="+">
          +
        </button>
        <button onClick={this.handleSubtractClick} id="subtract" value="-">
          -
        </button>
        <button onClick={this.handleMultiplyClick} id="multiply" value="*">
          &times;
        </button>
        <button onClick={this.handleDivideClick} id="divide" value="/">
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

const Dupa = () => <Calculator />;

ReactDOM.render(<Dupa />, document.getElementById("root"));
