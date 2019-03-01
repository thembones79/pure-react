import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const UserAvatar = ({user, size}) => {
    return(
    <img
    className={`user-avatar ${size || ""}`}
    alt = "user avatar"
    src = {user.avatar}
    />
    );
}

const UserStats = ({user}) => (
    <div className="user-stats">
        <div>
            <UserAvatar user={user} />
            {user.name}
        </div>
        <div className="stats">
            <div>{user.followers} Followers</div>
            <div>Following {user.following}</div>
        </div>
    </div>
);

ReactDOM.render(<UserAvatar/>, document.querySelector('#root'));