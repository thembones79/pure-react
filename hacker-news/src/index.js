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
          <Stories />
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

const Stories = () => (
  <table>
    <tbody>
      <Story />
    </tbody>
  </table>
);

const Story = () => (
  <>
    <MainText />
    <SubText 
    timestamp={hackerStories.time}
    />
  </>
);

const MainText = () => (
  <tr>
    <td>1.</td>
    <td>▲</td>
    <td>
      <span>Airtable raises $100M at a $1.1B valuation</span>
      <span>(techcrunch.com)</span>
    </td>
  </tr>
);

const SubText = ({timestamp}) => (
  <tr>
    <td colspan={2} />
    <td>
      <span>125 points</span>
      <span>by kbyatnal</span>
      <span>{timestamp}</span>" | "<span>hide</span>" | "
      <span>41 comments</span>
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
    comments: 31
  }
];

ReactDOM.render(<ListOfStories />, document.querySelector("#root"));
