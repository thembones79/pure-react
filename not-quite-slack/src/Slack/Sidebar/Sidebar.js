import React from 'react';
import './Sidebar.css';
import Channels from './Channels/Channels';
import People from './People/People';

const Sidebar = ({ channelChangeHandler, data, activeChannel }) => (
    <div className="sidebar">
      <Channels onChannelChange={channelChangeHandler} data={data} activeChannel={activeChannel}/>
      <People onChannelChange={channelChangeHandler} data={data} activeChannel={activeChannel}/>
    </div>
  );

export default Sidebar;