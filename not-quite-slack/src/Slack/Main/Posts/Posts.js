import React from 'react';
import './Posts.css'
import Post from './Post/Post';

const Posts = props => {
    if (props.activeChannel === "none") {
      return (
        <div className="nothing-selected">
          <p>Please select a channel or person to chat with.</p>
        </div>
      );
    } else {      
      let activeConversation = props.data[props.activeGroup].find(
        active => active.channel === props.activeChannel
      );
  
      return (
        <div className="posts">
          {activeConversation.messages.map((post, index) => (
            <Post
              key={index}
              user={post.user}
              timestamp={post.timestamp}
              message={post.message}
            />
          ))}
        </div>
      );
    }
  };

export default Posts;