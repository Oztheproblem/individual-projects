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
        } else {throw new Error('Insufficient funds');}
    }

    // struglling to code for printStatement.Will write pseudo to help
    // printStatement() = 'date || credit || debit || balance';
    // transactions.reverse() is used to reverse the order of the transactions. Then printed on each line
    // needs to have 2 decimals to print correctly 
    
    printStatement() {
        let statement = 'date || credit || debit || balance'; 

        for (const transaction of this.transactions.reverse()) {
            const { date, credit, debit, balance } = transaction;
            statement += `\n${date} || ${credit ? credit.toFixed(2) : ''} || ${debit ? debit.toFixed(2) : ''} || ${balance.toFixed(2)}`;}        
        return statement;
    }
};

module.exports = Bank;