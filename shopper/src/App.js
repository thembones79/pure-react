import React from "react";
import CartPage from "./CartPage";
import Nav from "./Nav";
import "./App.css";
import ItemPage from "./ItemPage";
import { items } from "./static-data";

class App extends React.Component {
  state = { activeTab: 0, cart: [] };

  handleTabChange = index => {
    this.setState({ activeTab: index });
  };

  handleAddToCart = item => {
    this.setState({
      cart: [...this.state.cart, item.id]
    });
  };

  handleRemoveOne = item => {
    let index = this.state.cart.indexOf(item.id);
    this.setState({
      cart: [
        ...this.state.cart.slice(0, index),
        ...this.state.cart.slice(index + 1)
      ]
    });
  };

  renderCart() {
    let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
      itemCounts[itemId] = itemCounts[itemId] || 0;
      itemCounts[itemId]++;
      return itemCounts;
    }, {});

    let cartItems = Object.keys(itemCounts).map(itemId => {
      var item = items.find(item => item.id === parseInt(itemId, 10));
      return {
        ...item,
        count: itemCounts[itemId]
      };
    });
    let cartItemSumPrices = cartItems.map(item => item.price * item.count);
    var cartTotalSum = cartItemSumPrices.reduce((total, num) => total + num, 0);

    if (!cartTotalSum) {
      return (
        <div className="App-emptyCart">
          <p>Your cart is empty.</p>
          <p>Why not add some expensive products to it?</p>
        </div>
      );
    } else {
      return (
        <div>
          <CartPage
            items={cartItems}
            onAddOne={this.handleAddToCart}
            onRemoveOne={this.handleRemoveOne}
          />
          <CartTotal total={cartTotalSum} />
        </div>
      );
    }
  }

  renderContent() {
    switch (this.state.activeTab) {
      default:
      case 0:
        return <ItemPage items={items} onAddToCart={this.handleAddToCart} />;
      case 1:
        return this.renderCart();
      case 2:
        return <span>Test</span>;
    }
  }
  navBarCartTotal() {
    var priceArr = this.state.cart.map(itemId => {
      var item = items.find(item => item.id === parseInt(itemId, 10));
      return item.price;
    });
    var cartTotal = priceArr.reduce((total, num) => total + num, 0);
    return cartTotal;
  }

  render() {
    let { activeTab } = this.state;

    return (
      <div className="App">
        <Nav
          activeTab={activeTab}
          onTabChange={this.handleTabChange}
          quantity={this.state.cart.length}
          total={this.navBarCartTotal()}
        />
        <main className="App-content">{this.renderContent()}</main>
      </div>
    );
  }
}

const CartTotal = ({ total }) => {
  return <div className="App-cart-total">Total: ${total}</div>;
};

export default App;
