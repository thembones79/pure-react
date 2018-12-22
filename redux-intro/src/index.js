import React from "react";
import { render } from "react-dom";
import "./index.css";
import Counter from "./Counter";

const App = () => (
  <div>
    <Counter />
  </div>
);

render(<App />, document.getElementById("root"));
