import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";
import moment from "moment";

class Reddit extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then(res => {
      const posts = res.data.data.children.map(obj => obj.data);
      this.setState({ posts });
    });
  }
  render() {
    return (
      <div className="reddit">
        <h1>/r/reactjs</h1>
        <ul>
          {this.state.posts.map(post => (
            <Post post={post} />
          ))}
        </ul>
      </div>
    );
  }
}

const Scoring = ({ score }) => (
  <div className="scoring">
    <button className="vote">🡅</button>
    <div className="score">{score}</div>
    <button className="vote">🡇</button>
  </div>
);

const Avatar = ({ picture }) => (
  <img
    className="thumbnail"
    alt="thumbnail"
    src={
      picture === "self" ? "https://www.redditstatic.com/new-icon.png" : picture
    }
  />
);

const FullTitle = ({ url, title, domain }) => (
  <div className="fulltitle">
    <a className="title" href={url}>
      {title}
    </a>
    <span className="domain">{domain}</span>
  </div>
);

const Time = ({ time }) => {
  const timeString = moment.unix(time).fromNow();
  return <span className="time">{timeString}</span>;
};

const Author = ({ author }) => <span className="author">{author}</span>;

const CommentSection = ({ comments }) => (
  <div className="comment-section">
    <span className="comments">{comments} comments</span>
    <span className="fakelinks"> share save hide report pocket</span>
  </div>
);

const Post = ({ post }) => (
  <li key={post.id}>
    <div className="post">
      <Scoring score={post.score} />
      <Avatar picture={post.thumbnail} />
      <div className="right-content">
        <hr />
        <FullTitle url={post.url} title={post.title} domain={post.domain} />
        Submitted <Time time={post.created_utc} /> by{" "}
        <Author author={post.author} />
        <CommentSection comments={post.num_comments} />
      </div>
    </div>
  </li>
);

ReactDOM.render(<Reddit />, document.querySelector("#root"));
