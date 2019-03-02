import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";


const UserAvatar = (user, size) => (
    <img
    className={`user-avatar ${size || ""}`}
    alt="user avatar"
    src={user.avatar}
    />
);

const UserStats = ({user}) => (
    <div className="user-stats">
        <div>
            <UserAvatar user={user}/>
            {user.name}
        </div>
        <div className="stats">
            <div>{user.followers} Followers</div>
            <div>Following {user.following}</div>
        </div>
    </div>
);

const Nav = ({children}) => (
    <div className="nav">
        {children}
    </div>
);

const Content = () => (
    <div className="content">main content here</div>
);

const Sidebar = ({children}) => (
    <div className="sidebar">
        {children}
    </div>
);

const Body = ({sidebar, content}) => (
    <div>
    <Sidebar>{sidebar}</Sidebar>
    {content}
    </div>
);