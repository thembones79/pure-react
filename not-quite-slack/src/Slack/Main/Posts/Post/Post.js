import React from 'react';
import './Post.css';

const Post = ({ user, timestamp, message }) => (
    <div className="post">
      <img
        src={`https://api.adorable.io/avatars/160/${user}@${user}.pl`}
        className="avatar"
        alt="avatar"
      />
      <div className="post-content">
        <p>
          <span className="user">{user}</span>{" "}
          <span className="timestamp">{timestamp}</span>
        </p>
        <p className="old-message">{message}</p>
      </div>
    </div>
  );

export default Post;