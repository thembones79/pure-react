import React from "react";
import Pomodoro from "./Pomodoro";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { combineReducers } from "redux";

const initialState = {
  isSession: true,
  sessionLength: 25,
  breakLength: 5,
  secondsLeft: 1500,
  intervalTime: 1500,
  isCountingDown: false
};

function reducer(state = initialState, action) {
  return state;
}

const sessionReducer = (state = initialState.secondsLeft, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 60;
    case "DECREMENT":
      return state - 60;
    default:
      return state;
  }
};

const breakReducer = (state = initialState.secondsLeft, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 60;
    case "DECREMENT":
      return state - 60;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  session: sessionReducer,
  break: breakReducer
});

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Pomodoro />
  </Provider>
);

export default App;
