import React from "react";

const Nav = ({ activeTab, onTabChange, quantity, total }) => (
  <nav className="App-nav">
    <ul>
      <li className={`App-nav-item ${activeTab === 0 && "selected"}`}>
        <a onClick={() => onTabChange(0)}>Items</a>
      </li>
      <li className={`App-nav-item ${activeTab === 1 && "selected"}`}>
        <NavLink index={1} onClick={onTabChange}>Cart</NavLink>
      </li>
      <li className={`App-nav-item ${activeTab ===2 && "selected"}`}>
          <NavTest index={2} onClick={onTabChange}>Test</NavTest>
      </li>
      <span className="App-nav-summary"><i class="fas fa-shopping-cart"> </i> {quantity} items (${total})</span>
    </ul>   
  </nav>
);


class NavLink extends React.Component {
    handleClick = () => {
        this.props.onClick(this.props.index);
    }

    render() {
        return (
            <a onClick={this.handleClick}>{this.props.children}</a>
        );
    }
}

const NavTest = ({index, onClick, children}) => {

    const handleClick = () => {
        onClick(index);
    }

    return (
        <a onClick={handleClick}>{children}</a>
    );
}

export default Nav;
