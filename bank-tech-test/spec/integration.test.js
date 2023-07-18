const app = require('../app');


describe('Bank', () => {
    //beforeEach rests bank for each test
    beforeEach(() => {
        app.bank.transactions = [];
        app.bank.balance = 0;
    });
    
    it('should deposit correctly', () => {  
        app.deposit(1000);
        expect(app.bank.balance).toBe(1000);
    });
    
});