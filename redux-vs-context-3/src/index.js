import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { createStore } from "redux";
import { connect, Provider } from "react-redux";

// create reducer with empty initial state
const initialState = {};
function reducer(state = initialState, action) {
  switch (action.type) {
    // respond to the SET_USER action and update the state accordingly
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
}

// create store with the reducer
const store = createStore(reducer);

// dispatch an action to set the user (since initial state is empty)
store.dispatch({
  type: "SET_USER",
  user: {
    avatar: "https://api.adorable.io/avatars/160/boss@gmail.co",
    name: "Mike",
    followers: 1234,
    following: 123
  }
});

// this mapStateToProps function extracts a single key
// from state (user) and passes it as the 'user' prop
const mapStateToProps = state => ({
  user: state.user
});

// connect() UserAvatar so it receives the 'user' directly
// without having to receive it from component above

// could also split this up into 2 variables:
//  const UserAvatarAtom = ({user, size}) => (...)
//  const UserAvatar = connect(mapStateToProps)(UserAvatarAtom);
const UserAvatar = connect(mapStateToProps)(({ user, size }) => (
  <img
    className={`user-avatar ${size || ""}`}
    alt="user avatar"
    src={user.avatar}
  />
));

// connect() UserStats so it receives the 'user' directly,
// without having to receive it from a component above
// (both use the same mapStateToProps function)
const UserStats = connect(mapStateToProps)(({ user }) => (
  <div className="user-stats">
    <div>
      <UserAvatar />
      {user.name}
    </div>
    <div className="stats">
      <div>{user.followers} Followers</div>
      <div>Following {user.following}</div>
    </div>
  </div>
));

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

// App doesn't hold state anymore, so it can be a stateless function
const App = () => (
  <div className="app">
    <Nav />
    <Body />
  </div>
);

// wrap the whole app in Provider so that connect() has access to the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
