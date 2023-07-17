const Bank = require('./bank');

describe('Bank', () => {
    let bank;

    //beforeEach allows a class to be created before each test
    beforeEach(() => {
        bank = new Bank();
    });

    it('should deposit money', () => {
        bank.deposit(1000, '18-07-2023');
        expect(bank.balance).toBe(1000);
    });

    it('should withdraw money', () => {
        bank.deposit(1000, '18-07-2023');
        bank.withdraw(500, '19-07-2023');
        expect(bank.balance).toBe(500);
    })

});