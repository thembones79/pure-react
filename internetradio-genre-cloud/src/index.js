import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const TestComponent = () => (
  <a    
    style={{margin: "4px"}}
    className="btn btn-default text-capitalize btn-lg"
    href="/stations/christmas/"
  >    christmas
  </a>
);

ReactDOM.render(<TestComponent/>, document.getElementById('root'));
