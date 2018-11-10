import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const ReusableComponent = () => (
    <div className="container">
        <ErrorBox>The world is ending</ErrorBox>
    </div>

);

const ErrorBox = ({ children }) => (
    <div className="alert alert-danger" role="alert">
        <i className="fas fa-skull icon" />
        {children}
    </div>
);

ReactDOM.render(<ReusableComponent />, document.querySelector('#root'));