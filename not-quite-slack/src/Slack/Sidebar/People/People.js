import React from 'react';
import './People.css';

const People = ({ onChannelChange, data, activeChannel }) => (
    <div className="people">
      <h3>People</h3>
      <ul>
        {data.people.map(x => (
          <li
            key={x.channel}
            className={`navitem ${x.channel===activeChannel?"active":""}`}
            onClick={() => onChannelChange(x.channel, "people")}
          >
            {x.channel}
          </li>
        ))}
      </ul>
    </div>
  );

export default People;