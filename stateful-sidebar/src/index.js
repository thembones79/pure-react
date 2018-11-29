import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Layout extends React.Component {
  state = {
    showSidebar: false
  };

  toggleSidebar = () => {
    this.setState({
      showSidebar: !this.state.showSidebar
    });
  };

  render() {
    const { showSidebar } = this.state;
    return (
      <div className="layout">
        {showSidebar && (
          <Sidebar onHide={this.toggleSidebar}>some sidebar content</Sidebar>
        )}
        <Content
          isSidebarVisible={showSidebar}
          onShowSidebar={this.toggleSidebar}
        >
          some content here
        </Content>
      </div>
    );
  }
}

class InputComponent extends React.Component {
  state = { text: "" };
  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (
      <input type="text" value={this.state.text} onChange={this.handleChange} />
    );
  }
}

class TrickInput extends React.Component {
  state = { text: "try typing something" };
  handleChange = event => {
    this.setState({
      text: "ha ha, nope :)"
    });
  };

  render() {
    return (
      <input type="text" value={this.state.text} onChange={this.handleChange} />
    );
  }
}

class NoNumbersInput extends React.Component {
  state = { text: "no numbers allowed" };
  handleChange = event => {
    let text = event.target.value;
    text = text.replace(/[0-9]/g, "");
    this.setState({ text });
  };

  render() {
    return (
      <input type="text" value={this.state.text} onChange={this.handleChange} />
    );
  }
}

class RefInput extends React.Component {
  showValue = () => {
    alert(`Input contains: ${this.input.value}`);
  };

  render() {
    return (
      <div>
        <input type="text" ref={input => (this.input = input)} />
        <button onClick={this.showValue}>Alert the Value!</button>
      </div>
    );
  }
}

const Content = ({ children, isSidebarVisible, onShowSidebar }) => (
  <div className="content">
    {children}
    {!isSidebarVisible && <button onClick={onShowSidebar}>Hide</button>}
    <InputComponent />
    <TrickInput />
    <NoNumbersInput />
    <RefInput />
  </div>
);

const Sidebar = ({ onHide, children }) => (
  <div className="sidebar">
    {children}
    <button onClick={onHide}>Hide</button>
  </div>
);

ReactDOM.render(<Layout />, document.getElementById("root"));
