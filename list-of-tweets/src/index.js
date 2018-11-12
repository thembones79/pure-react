import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import PropTypes from "prop-types";
import "./index.css";

const TweetList = ({ tweets }) => (
  <table className="file-list">
    <tbody>
      {tweets.map(tweet => (
        <Tweet key={tweet.avatarMail} tweet={tweet} />
      ))}
    </tbody>
  </table>
);

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.avatarMail} />
      <div className="content">
        <NameWithHandle author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Avatar({ hash }) {
  var url = `https://api.adorable.io/avatars/80/${hash}`;
  return <img src={url} className="avatar" alt="avatar" />;
}

function Message({ text }) {
  return <div className="message">{text}</div>;
}

Message.propTypes = {
  text: PropTypes.string.isRequired
};

function NameWithHandle({ author }) {
  const { name, handle } = author;
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

NameWithHandle.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired
  }).isRequired
};

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

function getRetweetCount(count) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>;
  } else {
    return null;
  }
}

const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet" />
    {getRetweetCount(count)}
  </span>
);

RetweetButton.propTypes = {
  count: PropTypes.number
};

const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart" />
    {count > 0 && <span className="like-count">{count}</span>}
  </span>
);

LikeButton.propTypes = {
  count: PropTypes.number
};

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

var testTweetList = [
  {
    message: "Something about cats.",
    avatarMail: "michal@unisystem.pl",
    author: {
      handle: "catperson",
      name: "IAMA Cat Person"
    },
    likes: 2,
    retweets: 0,
    timestamp: "2016-07-30 21:24:37"
  },
  {
    message: "Something about dogs.",
    avatarMail: "michal.szumnarski@gmail.com",
    author: {
      handle: "dogperson",
      name: "IAMA Dog Person"
    },
    likes: 20,
    retweets: 8,
    timestamp: "2017-07-30 21:24:37"
  },
  {
    message: "I love may husband.",
    avatarMail: "marzena@outlook.com",
    author: {
      handle: "marzena",
      name: "MarzenkaSz"
    },
    likes: 0,
    retweets: 1,
    timestamp: "2018-07-30 21:24:37"
  }
];

ReactDOM.render(
  <TweetList tweets={testTweetList} />,
  document.querySelector("#root")
);
