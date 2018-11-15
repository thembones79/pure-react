import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const ListOfStories = () => (
  <table>
    <tbody>
      <tr>
        <td>
          <Header
            icon="A"
            title="Hacker News"
            navArr={["new", "comments", "show", "ask", "jobs", "submit"]}
          />
        </td>
      </tr>
      <tr>
        <td>
          <Stories stories={hackerStories} />
        </td>
      </tr>
    </tbody>
  </table>
);

const Header = ({ icon, title, navArr }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <div>{icon}</div>
          </td>
          <td>
            <h3>{title}</h3>
          </td>
          <td>
            <span>
              <span>{navArr.join(` | `)}</span>
            </span>
            <span>login</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const Stories = ({ stories }) => (
  <table>
    <tbody>
      {stories.map((story, index) => (
        <Story story={story} index={index} key={index} />
      ))}
    </tbody>
  </table>
);

const Story = ({ story, index }) => (
  <>
    <MainText index={index} source={story.source} title={story.title}/>
    <SubText timestamp={story.time}
    points={story.points}
    author={story.author}
    comments={story.comments}
     />
  </>
);

const MainText = ({ index, title, source }) => (
  <tr>
    <td>{index + 1}.</td>
    <td>▲</td>
    <td>
      <span>{title}</span>
      <span>({source})</span>
    </td>
  </tr>
);

const SubText = ({ points, author, timestamp, comments }) => (
  <tr>
    <td colspan={2} />
    <td>
      <span>{points} points</span>
      <span>{author}</span>
      <span>{timestamp}</span> | <span>hide</span> | 
      {comments > 0 ?<span>{comments} comments</span> : <span>discuss</span>}
    </td>
  </tr>
);

const hackerStories = [
  {
    title: "Airtable raises $100M at a $1.1B valuation",
    source: "techcrunch.com",
    points: 125,
    author: "kbyatnal",
    time: "2 hours ago",
    comments: 41
  },
  {
    title: "Practical Guide to Bare Metal C++",
    source: "gitbooks.io",
    points: 175,
    author: "adamnemecek",
    time: "7 hours ago",
    comments: 0
  }
];

ReactDOM.render(<ListOfStories />, document.querySelector("#root"));
