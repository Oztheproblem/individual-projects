import React from 'react';
import './menu.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { jsonData } from './receipt';

function Menu({
  visibility,
  products,
  onProductRemove,
  onClose,
  onQuantityChange,
  onAddToCart, // Add the new prop for selecting an item
}) {
  const coffeeMenu = jsonData[0].prices[0];

  return (
    <div
      className='modal'
      style={{
        display: visibility ? 'block' : 'none',
      }}
    >
      <div className='header'>
        <h2>Hipster Coffee Menu</h2>
        <button className='btn close-btn' onClick={onClose}>
          <AiFillCloseCircle size={30} />
        </button>
      </div>
      <div className='cart-products'>
        {products.length === 0 && <span className='empty-text'>No Products</span>}
        {Object.entries(coffeeMenu).map(([itemName, itemPrice]) => {
          const product = products.find((product) => product.name === itemName);
          return (
            <div className='cart-product' key={itemName}>
              <div className='product-info'>
                <h3>{itemName}</h3>
                <div className='product-price'>
                  <span>${(itemPrice * (1 + 0.0864)).toFixed(2)}</span>
                  {product ? (
                    <div className='product-controls'>
                      <input
                        type='number'
                        min={0}
                        value={product.quantity}
                        onChange={(e) => onQuantityChange(itemName, parseInt(e.target.value))}
                      />
                      <button onClick={() => onProductRemove(itemName)}>Remove</button>
                    </div>
                  ) : (
                    // Show the "Add to Cart" button for items not in the cart
                    <button onClick={() => onAddToCart(itemName)}>Add to Cart</button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
