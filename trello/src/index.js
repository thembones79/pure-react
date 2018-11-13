import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Trello = () => <Board board={columns} />;

const Board = ({ board }) => (
  <div className="board">
    {board.map(column => (
      <Column key={column.title} column={column} />
    ))}
  </div>
);

const Column = ({ column }) => (
  <div className="column">
    <ColumnTitle title={column.title} />
    <MoreButton />
    <CardList cardArr={column.cards} />
    <AddButton />
  </div>
);

const ColumnTitle = ({ title }) => <h3 className="column-title">{title}</h3>;

const MoreButton = () => <i className="fa fa-ellipsis-h more-button" />;

const CardList = ({ cardArr }) => (
  <div className="card-list">
    {cardArr.map(card => (
      <div className="card" key={card}>
        {card}
      </div>
    ))}
  </div>
);

const AddButton = () => <div className="add-button">+ Add a card</div>;

var column = {
  title: "Phone Features",
  cards: [
    "Subwoofer",
    "Non-porous, washable",
    "Wings",
    "Beveled Bezel",
    "Bezeled Bevel",
    "Seedless"
  ]
};

var columns = [
  {
    title: "Phone Features",
    cards: [
      "Subwoofer",
      "Non-porous, washable",
      "Wings",
      "Beveled Bezel",
      "Bezeled Bevel",
      "Seedless"
    ]
  },
  {
    title: "freeCodeCamp learning",
    cards: ["HTML5", "CSS3", "Javascript", "ES6", "ReactJS", "Node.js"]
  },
  {
    title: "I love my family",
    cards: [
      "My wife - Marzena",
      "My son - Wiktor",
      "My mother - Dorota",
      "My brother - Adam",
      "My sister - Ula",
      "My auntie - Mila"
    ]
  }
];

ReactDOM.render(<Trello />, document.querySelector("#root"));
