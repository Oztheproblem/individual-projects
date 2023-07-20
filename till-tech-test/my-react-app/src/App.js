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
        product.name === productName ? { ...product, quantity: quantity } : product
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
  
  const handleAddToCart = (productName) => {
    const productToAdd = {
      name: productName,
      quantity: 1,
    };
    setProducts(prevProducts => [...prevProducts, productToAdd]);
  };

  const calculateTotalPrice = () => {
    return calculateOrderTotal(products);
  };

  const handlePrintReceipt = () => {
    const total = calculateTotalPrice();
    const tax = calculateTax(total);
    const receipt = printReceipt('John Doe', products, total, tax); // Replace 'John Doe' with the actual customer name
    console.log(receipt); // For demonstration, you can modify this to print the receipt in a more user-friendly way.
  
    // Open the receipt in a new window
    const newWindow = window.open('', '_blank');
    newWindow.document.write('<html><head><title>Receipt</title></head><body>');
    newWindow.document.write(`<pre>${receipt}</pre>`);
    newWindow.document.write('</body></html>');
    newWindow.document.close();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hipster Coffee Shop</h1>
        <img src={hipsterLogo} className="App-logo" alt="logo" />
        <p>I have a beard and I have feelings</p>
    
        {/* Pass necessary props to the Menu component */}
        <Menu
          visibility={isMenuVisible}
          products={products}
          onProductRemove={handleProductRemove}
          onClose={handleCloseMenu}
          onQuantityChange={handleQuantityChange}
          onAddToCart={handleAddToCart} // Pass the new prop for adding items to the cart
        />
        <button className="btn" onClick={handleOpenMenu}>
          <h2>Open Menu</h2>
        </button>



        <div>
          {products.length > 0 && (
            <div>
              <h2>Cart</h2>
              <ul>
                {products.map((product) => (
                  <li key={product.name}>
                    {product.name} - Quantity: {product.quantity}
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
