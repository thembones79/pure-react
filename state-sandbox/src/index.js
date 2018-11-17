import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Child = ({ onAction }) => <button onClick={onAction}>Click Me!</button>;
const Reset = ({ onAction }) => <button onClick={onAction}>Reset</button>;

class CountingParent extends React.Component {
  state = {
    actionCount: 0
  };

  handleAction = action => {
    console.log("Child says", action);

    //actionCount is incremented, and
    //the new count replaces the existing one
    this.setState({
      actionCount: this.state.actionCount + 1
    });

    //functional setState 
    this.setState((state, props) => {
        return {
            actionCount: state.actionCount +1
        }
    });

    this.setState((state, props) => {
        return {
            actionCount: state.actionCount +1
        }
    });
    
  };

  reset = () => {
    this.setState({
      actionCount: 0
    });
  };

  render() {
    return (
      <div>
        <Child onAction={this.handleAction} />
        <Reset onAction={this.reset} />
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    );
  }
}

const Page = () => (
  <div>
    <CountingParent />
    <CountingParent />
    <CountingParent />
  </div>
);

ReactDOM.render(<Page />, document.getElementById("root"));
