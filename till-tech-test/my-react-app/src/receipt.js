import React from'react';


//export const so it can be accessed on App.js amd 
export const taxRate = 0.0864;

export const jsonData = [ {
    "shopName": "Hipsters in denyle",
    "address": "Somewhere in Shoreditch",
    "phone": "0181 811 8181",
    "prices": [
      {
        "Cafe Latte": 4.75,
        "Flat White": 4.75,
        "Cappucino": 3.85,
        "Single Espresso": 2.05,
        "Double Espresso": 3.75,
        "Americano": 3.75,
        "Cortado": 4.55,
        "Tea": 3.65,
        "Choc Mudcake": 6.40,
        "Choc Mousse": 8.20,
        "Affogato": 14.80,
        "Tiramisu": 11.40,
        "Blueberry Muffin": 4.05,
        "Chocolate Chip Muffin": 4.05,
        "Muffin Of The Day": 4.55
      }
    ]
  }
  ];



  export const calculateOrderTotal = (order) => {
    const { prices } = jsonData[0];
    let total = 0;
    order.forEach(item => {
      if (item.name in prices[0]) {
        total += prices[0][item.name] * item.quantity;
      }
    });
    return total;
  };
  
  // ...
  

export const calculateTax = (orderedItems) => {
    return orderedItems * taxRate;
};

export const printReceipt = (customerInfo, order) => {
    const orderTotal = calculateOrderTotal(order);
    const taxAmount = calculateTax(orderTotal);
    
    const receiptInfo = `
        Shop Name: ${jsonData[0].shopName}
        Address: ${jsonData[0].address}
        Phone: ${jsonData[0].phone}
        Customer: ${customerInfo}
        Order Total: $${orderTotal.toFixed(2)}
        Tax Amount: $${taxAmount.toFixed(2)}
        Grand Total: $${(orderTotal + taxAmount).toFixed(2)}
    `;

    return receiptInfo;
};


