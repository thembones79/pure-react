import React from 'react';
import './Main.css';
import Posts from './Posts/Posts';
import Footer from './Footer/Footer';

const Main = props => (
    <div className="main">
      <Posts
        activeChannel={props.activeChannel}
        activeGroup={props.activeGroup}
        data={props.data}
      />
      <Footer
        handleEnter={props.handleEnter}
        handleChange={props.handleChange}
        inputText={props.inputText}
        activeChannel={props.activeChannel}
      />
    </div>
  );

  export default Main;