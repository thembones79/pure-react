import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Tweet({tweet}) {
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar}/>
            <div className="content">
                <NameWithHandle author={tweet.author}/>
                <Time time={tweet.timestamp}/>
                <Message text={tweet.message}/>
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton />
                    <LikeButton />
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    );
}

function Avatar({hash}) {
    var url = `https://www.gravatar.com/avatar/${hash}`
    return (
        <img
            src={url}
            className="avatar"
            alt="avatar" />
    );
}

function Message({text}) {
    return (
        <div className="message">
            {text}
        </div>
    );
}

function NameWithHandle() {
    return (
        <span className="name-with-handle">
            <span className="name">Your Name</span>
            <span className="handle">@yourhandle</span>
        </span>
    );
}

const Time = () => (
    <span className="time">3h ago</span>
);

const ReplyButton = () => (
    <i className="fa fa-reply reply-button" />
);

const RetweetButton = () => (
    <i className="fa fa-retweet retweet-button" />
);

const LikeButton = () => (
    <i className="fa fa-heart like-button" />
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button" />
);

var testTweet = {
    message: "Something about cats.",
    gravatar: "xyz",
    author: {
        handle: "catperson",
        name: "IAMA Cat Person"
    },
    likes: 2,
    retweets: 0,
    timestamp: "2016-07-30 21:24:37"
};


ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector('#root'));