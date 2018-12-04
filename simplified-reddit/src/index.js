import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";
import moment from "moment";

class Post extends React.Component {
  state = {
    vote: 0,
    scoreColor: "black",
    upArrowColor: "gray",
    downArrowColor: "gray"
  };

  handleUpVote = () => {
    this.state.vote === 1
      ? this.setState({
          vote: 0,
          scoreColor: "black",
          upArrowColor: "gray",
          downArrowColor: "gray"
        })
      : this.setState({
          vote: 1,
          scoreColor: "red",
          upArrowColor: "red",
          downArrowColor: "gray"
        });
  };

  handleDownVote = () => {
    this.state.vote === -1
      ? this.setState({
          vote: 0,
          scoreColor: "black",
          downArrowColor: "gray",
          upArrowColor: "gray"
        })
      : this.setState({
          vote: -1,
          scoreColor: "blue",
          downArrowColor: "blue",
          upArrowColor: "gray"
        });
  };

  render() {
    return (
      <li key={this.props.post.id}>
        <div className="post">
          <Scoring
            score={this.props.post.score + this.state.vote}
            onUpVote={this.handleUpVote}
            onDownVote={this.handleDownVote}
            scoreColor={this.state.scoreColor}
            downArrowColor={this.state.downArrowColor}
            upArrowColor={this.state.upArrowColor}
          />
          <Avatar picture={this.props.post.thumbnail} />
          <div className="right-content">
            <hr />
            <FullTitle
              url={this.props.post.url}
              title={this.props.post.title}
              domain={this.props.post.domain}
            />
            Submitted <Time time={this.props.post.created_utc} /> by{" "}
            <Author author={this.props.post.author} />
            <CommentSection comments={this.props.post.num_comments} />
          </div>
        </div>
      </li>
    );
  }
}

class Reddit extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then(res => {
      const posts = res.data.data.children.map(obj => obj.data);
      posts.sort((a, b) => b.score - a.score);
      this.setState({ posts });
    });
  }
  render() {
    return (
      <div className="reddit">
        <h1>/r/reactjs</h1>
        <ul>
          {this.state.posts.map(post => (
            <Post post={post} key={post.id} />
          ))}
        </ul>
      </div>
    );
  }
}

const Scoring = ({
  score,
  onUpVote,
  onDownVote,
  upArrowColor,
  downArrowColor,
  scoreColor
}) => (
  <div className="scoring">
    <button onClick={onUpVote} className={`up vote ${upArrowColor}`}>
      🡅
    </button>
    <div className={`score ${scoreColor}`}>{score}</div>
    <button onClick={onDownVote} className={`down vote ${downArrowColor}`}>
      🡇
    </button>
  </div>
);

const Avatar = ({ picture }) => (
  <img
    className="thumbnail"
    alt="thumbnail"
    src={
      picture === "self"|| picture ==="default" ? "https://www.redditstatic.com/new-icon.png" : picture
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

ReactDOM.render(<Reddit />, document.querySelector("#root"));
