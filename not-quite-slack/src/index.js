import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { fakeData } from "./fake-data";

class Slack extends React.Component {
  state = {
    activeChannel: "#general",
    channels: fakeData.channels,
    people: fakeData.people
  };

  handleChannelChange = channelName => {
    this.setState({ activeChannel: channelName });
  };

  render() {
    return (
      <div className="app">
        <Sidebar channelChangeHandler={this.handleChannelChange} />
        <Main activeChannel={this.state.activeChannel} />
      </div>
    );
  }
}

const Channels = ({ onChannelChange }) => (
  <div className="channels">
    <h3>Channels</h3>
    <ul>
      {fakeData.channels.map(x => (
        <li key={x.channel} onClick={() => onChannelChange(x.channel)}>
          {x.channel}
        </li>
      ))}
    </ul>
  </div>
);

const People = () => (
  <div className="people">
    <h3>People</h3>
    <ul>
      {fakeData.people.map(x => (
        <li key={x.channel} onClick={() => alert(x.channel)}>
          {x.channel}
        </li>
      ))}
    </ul>
  </div>
);

const Sidebar = ({ channelChangeHandler }) => (
  <div className="sidebar">
    <Channels onChannelChange={channelChangeHandler} />
    <People />
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
  var activeConversation = fakeData.channels.find(
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
};

const Footer = () => (
  <div className="footer">
    <input
      className="message"
      placeholder={`Type your message here. Press ENTER to send.`}
    />
  </div>
);

const Main = props => (
  <div className="main">
    <Posts activeChannel={props.activeChannel} />
    <Footer />
  </div>
);

ReactDOM.render(<Slack />, document.getElementById("root"));
