const app = require('../app');
const Bank = require('../bank');


describe('Bank integration test', () => {
    let bank; // Declare a variable to hold the bank object

    beforeEach(() => {
      // Create a new Bank instance before each test
      app.bank = new Bank();
      app.bank.transactions = [];
      app.bank.balance = 0;
    });
    
    it('should deposit correctly and update the balance', () => {  
        app.bank.deposit(1000);
        expect(app.bank.balance).toBe(1000);
    });

    it('should withdraw correctly and update the balance', () => {
        app.bank.deposit(1000);  
        app.bank.withdraw(500);
        expect(app.bank.balance).toBe(500);
    });
    
    it('should print the balance in reverse chronological order ', () => {
        app.bank.deposit(1000);
        app.bank.deposit(1000);
        app.bank.withdraw(1000);



    });    
});