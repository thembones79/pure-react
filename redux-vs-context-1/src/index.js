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

const Nav = ({user}) => (
    <div className="nav">
        <UserAvatar user={user} size="small"/>
    </div>
);

const Content = () => <div className="content">main content here</div>;

const Sidebar = ({user}) => (
    <div className="sidebar">
        <UserStats user={user} />
    </div>
);

const Body = ({user}) => (
    <div className="body">
        <Sidebar user={user}/>
        <Content user={user}/>
    </div>
);

class App extends React.Component {
    state = {
        user: {
            avatar: "https://api.adorable.io/avatars/160/boss@gmail.com",
            name:"Mike",
            followers: 1234,
            following: 123
        }
    };

    render() {
        const {user} = this.state;

        return(
            <div className="app">
                <Nav user={user}/>
                <Body user={user}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));