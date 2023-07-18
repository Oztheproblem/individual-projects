const Bank = require('./bank');

class App {
    constructor () {
    this.bank = new Bank();
    }

    deposit(amount) {
        // Get the current date in the format 'dd/mm/yyyy'
        const date = new Date().toLocaleDateString();
        // Call the deposit method of the Bank class and pass the amount and date
        bank.deposit(amount, date);
        // Print a message to confirm the deposit
    console.log(`Deposited ${amount} on ${date}`);
    }

    withdraw(amount) {
        const date = new Date().toLocaleDateString();
        this.bank.withdraw(amount, date);
        console.log(`Withdrew ${amount} on ${date}`);
    }
}
module.exports = App;
