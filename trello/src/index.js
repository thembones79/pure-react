import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import columns from "./mycolumns"

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
    <div className="header">
      <ColumnTitle title={column.title} />
      <MoreButton />
    </div>
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

ReactDOM.render(<Trello />, document.querySelector("#root"));
