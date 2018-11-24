import React from "react";
import CartPage from './CartPage';
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

  renderCart(){
    let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
      itemCounts[itemId] = itemCounts[itemId] || 0;
      itemCounts[itemId]++;
      return itemCounts;
    },{});

    let cartItems = Object.keys(itemCounts).map(itemId => {
      var item = items.find(item => item.id === parseInt(itemId, 10));
      return {
        ...item,
        count: itemCounts[itemId]
      }
    });
return (
  <CartPage items={cartItems} />
);
  }

  renderContent() {
    switch (this.state.activeTab) {
      default:
      case 0:
        return <ItemPage items={items} onAddToCart={this.handleAddToCart}/>;
      case 1:
        return this.renderCart();
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
