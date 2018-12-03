import React from 'react';
import './Slack.css';
import { fakeData } from "./fake-data";
import Main from './Main/Main';
import Sidebar from './Sidebar/Sidebar';

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
            activeChannel={this.state.activeChannel}
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

  export default Slack;