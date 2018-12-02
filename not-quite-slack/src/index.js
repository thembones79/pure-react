import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { fakeData } from "./fake-data";

class Slack extends React.Component {
  state = {
    activeChannel: "none",
    activeGroup: "channels",
    fakeData: fakeData,
    inputText: ""
  };

  handleChannelChange = (channelName, groupName) => {
    this.setState({ activeChannel: channelName, activeGroup: groupName });
  };

  handleEnter = event => {
    if (this.state.inputText !== "") {
      let newFakeData = { ...this.state.fakeData };
      let indexOfActiveChannel = newFakeData[this.state.activeGroup].findIndex(
        i => i.channel === this.state.activeChannel
      );
      if (event.key === "Enter") {
        let d = new Date();
        newFakeData[this.state.activeGroup][indexOfActiveChannel].messages.push(
          {
            user: "Myself",
            timestamp: `${d.toUTCString()}`,
            message: event.target.value
          }
        );
        this.setState({ fakeData: newFakeData, inputText: "" });
      }
    }
  };

  handleInputChange = event => {
    this.setState({ inputText: event.target.value });
  };

  render() {
    return (
      <div className="app">
        <Sidebar
          channelChangeHandler={this.handleChannelChange}
          data={this.state.fakeData}
        />
        <Main
          activeChannel={this.state.activeChannel}
          activeGroup={this.state.activeGroup}
          data={this.state.fakeData}
          inputText={this.state.inputText}
          handleEnter={this.handleEnter}
          handleChange={this.handleInputChange}
        />
      </div>
    );
  }
}

const Channels = ({ onChannelChange, data }) => (
  <div className="channels">
    <h3>Channels</h3>
    <ul>
      {data.channels.map(x => (
        <li
          key={x.channel}
          onClick={() => onChannelChange(x.channel, "channels")}
        >
          {x.channel}
        </li>
      ))}
    </ul>
  </div>
);

const People = ({ onChannelChange, data }) => (
  <div className="people">
    <h3>People</h3>
    <ul>
      {data.people.map(x => (
        <li
          key={x.channel}
          onClick={() => onChannelChange(x.channel, "people")}
        >
          {x.channel}
        </li>
      ))}
    </ul>
  </div>
);

const Sidebar = ({ channelChangeHandler, data }) => (
  <div className="sidebar">
    <Channels onChannelChange={channelChangeHandler} data={data} />
    <People onChannelChange={channelChangeHandler} data={data} />
  </div>
);

const Post = ({ user, timestamp, message }) => (
  <div className="post">
    <img
      src={`https://api.adorable.io/avatars/160/${user}@${user}.pl`}
      className="avatar"
      alt="avatar"
    />
    <div className="post-content">
      <p>
        <span className="user">{user}</span>{" "}
        <span className="timestamp">{timestamp}</span>
      </p>
      <p className="old-message">{message}</p>
    </div>
  </div>
);

const Posts = props => {
  if (props.activeChannel === "none") {
    return (
      <div className="nothing-selected">
        <p>Please select a channel or person to chat with.</p>
      </div>
    );
  } else {
    var activeConversation;
    activeConversation = props.data[props.activeGroup].find(
      active => active.channel === props.activeChannel
    );

    return (
      <div className="posts">
        {activeConversation.messages.map((post, index) => (
          <Post
            key={index}
            user={post.user}
            timestamp={post.timestamp}
            message={post.message}
          />
        ))}
      </div>
    );
  }
};

const Footer = ({ inputText, handleEnter, handleChange, activeChannel }) => {
  return (
    <div className="footer">
      <input
        className="message"
        placeholder={`Type your message here. Press ENTER to send.`}
        value={inputText}
        onKeyPress={handleEnter}
        onChange={handleChange}
        disabled={activeChannel === "none"}
      />
    </div>
  );
};

const Main = props => (
  <div className="main">
    <Posts
      activeChannel={props.activeChannel}
      activeGroup={props.activeGroup}
      data={props.data}
    />
    <Footer
      handleEnter={props.handleEnter}
      handleChange={props.handleChange}
      inputText={props.inputText}
      activeChannel={props.activeChannel}
    />
  </div>
);

ReactDOM.render(<Slack />, document.getElementById("root"));
