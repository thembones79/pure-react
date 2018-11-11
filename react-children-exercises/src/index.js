import React from 'react';
import ReactDOM from 'react-dom';

const NavItem = ({ url, children }) => (
    <a href={url} alt={children}>{children}</a>
);

function Nav1({ children }) {
    let items = React.Children.toArray(children);
    for (let i = items.length - 1; i >= 1; i--) {
        items.splice(i, 0,
            <span key={i} className='separator' > | </span>
        );
    }
    return (
        <div> {items} </div>
    );
}

const Exercise1 = () => (
    <Nav1>
        <NavItem url='/' > Home </NavItem>
        <NavItem url='/about' > About </NavItem>
        <NavItem url='/contact' > Contact </NavItem>
    </Nav1>
);

function Nav2({ children }) {
    let items = React.Children.toArray(children);

    return (
        <div> {items[0]} </div>
    );
}

const Exercise2 = () => (
    <Nav2>
        <NavItem url='/' > Home </NavItem>
        <NavItem url='/about' > About </NavItem>
        <NavItem url='/contact' > Contact </NavItem>
    </Nav2>
);

function Nav3({ children }) {
    let items = React.Children.toArray(children);
    let promptNumOfChildren = prompt("Please enter number of children", "2");
    let numOfChildren = promptNumOfChildren - 0;

    return (
        <div> {items.slice(0,numOfChildren)} </div>
    );
}

const Exercise3 = () => (
    <Nav3>
        <NavItem url='/' > Home </NavItem>
        <NavItem url='/about' > About </NavItem>
        <NavItem url='/contact' > Contact </NavItem>
    </Nav3>
);

ReactDOM.render(<Exercise3 />, document.getElementById('root'));

