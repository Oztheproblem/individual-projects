import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { calculateOrderTotal, calculateTax, printReceipt, jsonData } from './receipt';
import hipsterLogo from './hipster.png';
import Menu from './menu';

function App() {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const [products, setProducts] = useState([]);

  const handleOpenMenu = () => {
    setMenuVisibility(true);
  };

  const handleCloseMenu = () => {
    setMenuVisibility(false);
  };

  const handleQuantityChange = (productName, quantity) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.name === productName ? { ...product, count: quantity } : product
      )
    );
  };

  const handleProductRemove = (productName) => {
    setProducts(prevProducts =>
      prevProducts.filter(product =>
        product.name !== productName
      )
    );
  };

  const calculateTotalPrice = () => {
    return calculateOrderTotal(products);
  };

  const handlePrintReceipt = () => {
    const total = calculateTotalPrice();
    const tax = calculateTax(total);
    const receipt = printReceipt(jsonData[0].shopName, products, total, tax);
    console.log(receipt); // For demonstration, you can modify this to print the receipt in a more user-friendly way.
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hipster Coffee Shop</h1>
        <img src={hipsterLogo} className="App-logo" alt="logo" />
        <p>I have a beard and I have feelings</p>

        <button className="btn" onClick={handleOpenMenu}>
          <h2>Open Menu</h2>
        </button>

        {/* Pass necessary props to the Menu component */}
        <Menu
          visibility={isMenuVisible}
          products={products}
          onProductRemove={handleProductRemove}
          onClose={handleCloseMenu}
          onQuantityChange={handleQuantityChange}
        />

        <div>
          {products.length > 0 && (
            <div>
              <h2>Cart</h2>
              <ul>
                {products.map((product) => (
                  <li key={product.name}>
                    {product.name} - Quantity: {product.count}
                  </li>
                ))}
              </ul>
              <h3>Total Price: ${calculateTotalPrice().toFixed(2)}</h3>
              <button onClick={handlePrintReceipt}>Print Receipt</button>
            </div>
          )}
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
