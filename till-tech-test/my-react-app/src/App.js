import logo from './logo.svg';
import './App.css';

const jsonData = [ {
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


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Hipster Coffee Shop</h1>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
