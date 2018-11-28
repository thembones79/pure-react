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
            <li key={post.id}>
              <hr />
              <a className="title" href={post.url}>
                {post.title}
              </a>
              <div className="domain">{post.domain}</div>
              <div className="author">{post.author}</div>
              <img
                className="thumbnail"
                alt="thumbnail"
                src={
                  post.thumbnail === "self"
                    ? "https://www.redditstatic.com/new-icon.png"
                    : post.thumbnail
                }
              />{" "}
              <div>score: {post.score}</div>
              <span>comments: {post.num_comments} </span>{" "}
              <Time time={post.created_utc} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

ReactDOM.render(<Reddit />, document.querySelector("#root"));
