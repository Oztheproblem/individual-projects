class Bank {
    constructor() {
        this.transactions = []; //transactions is set to an empty array initially
        this.balance = 0;  //this.balance is set to 0 initially                  
    }

    deposit(amount, date) {
        this.balance += amount; //same as saying balance = balance + amount
        this.transactions.push({date, credit: amount, balance: this.balance});
    }

    withdraw(amount, date) {
        if (this.balance >= amount) {
        this.balance -= amount; //same as saying balance = balance - amount
        this.transactions.push({date, debit: amount, balance: this.balance});
        } else { 
        throw new Error('Insufficient funds');
      }
    }
};

module.exports = Bank;
