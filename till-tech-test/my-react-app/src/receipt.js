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
    // console.log(prices); to check if it correctly displays prices array 
        let total = 0;
        order.forEach(item => {
        //console.log(item.product); to check it accesed prices array - should print Caffe Latte
        if (item.product in prices[0]) {
            total += prices[0][item.product] * item.quantity;
        }
        
     });
    return total;
};
