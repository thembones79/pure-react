import React from 'react';
import './Channels.css';

const Channels = ({ onChannelChange, data, activeChannel }) => (
    <div className="channels">
      <h3>Channels</h3>
      <ul>
        {data.channels.map(x => (
          <li
            key={x.channel}
            className={`navitem ${x.channel===activeChannel&&"active"}`}
            onClick={() => onChannelChange(x.channel, "channels")}
          >
            {x.channel}
          </li>
        ))}
      </ul>
    </div>
  );

export default Channels;