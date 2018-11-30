import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {fakeData} from './fake-data';

const myName = fakeData.channels[0].messages[1].user;

const Slack = ({name}) => (
    <div>Hi {name}
<div className="app">
    <div className="sidebar">
        <div className="channels">
            <h3>Channels</h3>
            <ul>
                <li>#general</li>
                <li>#help</li>
                <li>#react</li>
                <li>#redux</li>
                <li>#react-router</li>
            </ul>
        </div>
        <div className="people">
            <h3>People</h3>
            <ul>
                <li>Dave</li>
                <li>Zack</li>
                <li>Michael</li>
                <li>Victor</li>
                <li>Mary</li>
            </ul>
        </div>
    </div>
    <div className="main">
        <div className="posts">
            <div className="post">
                <img src="https://api.adorable.io/avatars/80/dave@dave.pl" className="avatar" alt="avatar"/>
                <div className="post-content">
                    <p>Dave 2018-03-09</p>
                    <p>Is it working?</p>
                </div>
            </div>
            <div className="post">
                <img src="https://api.adorable.io/avatars/80/myself@myself.pl" className="avatar" alt="avatar"/>
                <div className="post-content">
                    <p>Myself 2018-03-10</p>
                    <p>Of course</p>
                </div>
            </div>
        </div>
        <div className="footer">
            <input placeholder="Type your message here. Press ENTER to send."/>
        </div>

    </div>
</div>

    </div>
);

ReactDOM.render(<Slack name={myName}/>,document.getElementById('root'));