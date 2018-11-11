import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";

const App = () => (
  <div className="container">
    <button
      type="button"
      className="btn btn-primary"
      data-toggle="modal"
      data-target="#myModal"
    >
      Open modal
    </button>

    <Dialog>
      <Title>This Is Important</Title>
      <Body>Here is some important text or error or something.</Body>
      <Footer />
    </Dialog>
  </div>
);

const Title = ({ children }) => (
  <div className="modal-header">
    <h4 className="modal-title">{children}</h4>
    <button type="button" className="close" data-dismiss="modal">
      &times;
    </button>
  </div>
);

const Body = ({ children }) => <div className="modal-body">{children}</div>;

const Footer = () => (
  <div className="modal-footer">
    <button type="button" className="btn btn-danger" data-dismiss="modal">
      Close
    </button>
  </div>
);

const Dialog = ({ children }) => (
  <div className="modal fade" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">{children}</div>
    </div>
  </div>
);

Dialog.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
