import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Calculator = () => (

<div id="calculator">
    <div id="display">12345</div>    
        <button id="zero" value={0}>0</button>
        <button id="one" value={1}>1</button>
        <button id="two" value={2}>2</button>
        <button id="three" value={3}>3</button>
        <button id="four" value={4}>4</button>
        <button id="five" value={5}>5</button>
        <button id="six" value={6}>6</button>
        <button id="seven" value={7}>7</button>
        <button id="eight" value={8}>8</button>
        <button id="nine" value={9}>9</button>
        <button id="add" value="+">+</button>
        <button id="subtract" value="-">-</button>
        <button id="multiply" value="x">&times;</button>
        <button id="divide" value="/">&divide;</button>
        <button id="decimal" value=".">.</button>
        <button id="clear" value="C">C</button>
        <button id="equals" value="=">=</button>    
</div>
);

ReactDOM.render(<Calculator />, document.getElementById("root"));
