import React from "react";
import Nav from "./Nav";
import "./App.css";
import ItemPage from './ItemPage';
import {items} from './static-data';

class App extends React.Component {
  state = { activeTab: 0,
    cart: []
   };

  handleTabChange = index => {
    this.setState({ activeTab: index });
  };

  handleAddToCart = (item) => {
    this.setState({
      cart: [...this.state.cart, item.id]
    });
  }

  renderContent() {
    switch (this.state.activeTab) {
      default:
      case 0:
        return <ItemPage items={items} onAddToCart={this.handleAddToCart}/>;
      case 1:
        return <span>Cart</span>;
      case 2:
        return <span>Test</span>;
    }
  }

  render() {
    let { activeTab } = this.state;
    return (
      <div className="App">
        <Nav activeTab={activeTab} onTabChange={this.handleTabChange} />
        <div>
          {this.state.cart.length} items
        </div>
        <main className="App-content">{this.renderContent()}</main>
      </div>
    );
  }
}

export default App;
