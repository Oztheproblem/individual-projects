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

        const expectedStatement = 
        `date || credit || debit || balance 
        19/07/2023 || || 1000.00 || 1000.00
        19/07/2023 || 1000.00 || || 2000.00
        19/07/2023 || 1000.00 || || 1000.00`;
      
        const receivedStatement = app.bank.printStatement();
      
        // removes all whitespace from the string in order for the tests to pass
        const normalizedExpected = expectedStatement.replace(/\s+/g, ' ').trim();
        const normalizedReceived = receivedStatement.replace(/\s+/g, ' ').trim();
      
        expect(normalizedReceived).toEqual(normalizedExpected);    

    });    
});