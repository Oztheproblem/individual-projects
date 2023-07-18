const Bank = require('./bank');

class App {
    constructor() {
        this.bank = new Bank();
    }

    deposit(amount) {
        // Get the current date
        const date = new Date();
        // Call the deposit method of the Bank class and pass the amount and date
        this.bank.deposit(amount, date);
        // Print a message to confirm the deposit
        console.log(`Deposited ${amount} on ${date.toLocaleDateString('en-gb')}`);
    }

    withdraw(amount) {
        const date = new Date(); // Use Date object, not a string
        this.bank.withdraw(amount, date);
        console.log(`Withdrew ${amount} on ${date.toLocaleDateString('en-gb')}`);
        
    }

    printStatement() {
        // Call the printStatement method of the Bank class and return its result
        const statement = this.bank.printStatement();

        // Print the statement - without this, the statement will always be printed "\n' +" at end of line
        console.log(statement);
    }
}

module.exports = App;
