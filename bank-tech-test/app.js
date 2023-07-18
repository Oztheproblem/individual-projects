const Bank = require('./bank');

const bank = new Bank();

// deposit method called
bank.deposit(1000, "10-01-2023");
bank.deposit(2000, "13-01-2023");

// withdraw method called
bank.withdraw(500, "14-07-2023");

//variable statement created to be called in the consolel.log()
const statement = bank.printStatement();
console.log(statement);