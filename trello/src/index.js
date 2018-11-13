import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Trello = () => <Column column={column} />;

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

ReactDOM.render(<Trello />, document.querySelector("#root"));
