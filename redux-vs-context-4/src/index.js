import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Up top, we create a new context
// This in an object with 2 properties: {Provider, Consumer}
// Note that it's naped with UpperCase, not CamelCase
// This is important bedause we'll use it as a component later
// and Component Names must start with a Capital Letter
const UserContext = React.createContext();

// Components that need the data tap into the context
// by using its Consumer property. Consumer uses the "render props" pattern.
const UserAvatar = ({size}) => (
    <UserContext.Consumer>
        {user => (
            <img
            className={`user-avatar ${size || ""}`}
            alt="user avatar"
            src={user.avatar}
            />
        )}
    </UserContext.Consumer>

);

// notice that we don't need the 'user' prop anymore,
// because the Consumer fetches it from context
const UserStats = () => (
    <UserContext.Consumer>
        {user => (
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
        )}
    </UserContext.Consumer>
);



// Nav doesn't need to know about 'user' anymore
const Nav = () => (
    <div className="nav">
        <UserAvatar size="small" />
    </div>
);

const Content = () => <div className="content">main content here</div>;

// Sidebar doesn't need to know about 'user' anymore
const Sidebar = () => (
    <div className="sidebar">
        <UserStats />
    </div>
);

// Body doesn't need to know about 'user' anymore
const Body = () => (
    <div className="body">
        <Sidebar />
        <Content />
    </div>
);


// at the bottom, inside the App, we pass the context down
// through the tree using the Provider
class App extends React.Component {
    state = {
        user: {
            avatar: "https://api.adorable.io/avatars/160/bossa@gmail.co",
            name: "Mike",
            followers: 1234,
            following: 123
        }
    };

    render() {
        return (
            <div className="app">
                <UserContext.Provider value={this.state.user}>
                    <Nav/>
                    <Body/>
                </UserContext.Provider>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));
