const Bank = require('../bank');

describe('Bank', () => {
    let bank;

    //beforeEach allows a class to be created before each test
    beforeEach(() => {
        bank = new Bank();
    });

    it('should deposit money and update balance', () => {
        bank.deposit(1000, '18/07/2023');
        expect(bank.balance).toBe(1000);
    });

    it('should withdraw money and update balance', () => {
        bank.deposit(1000, '18/07/2023');
        bank.withdraw(500, '19/07/2023');
        expect(bank.balance).toBe(500);
    })

    it('should throw an error when trying to withdraw more than the balance', () => {
        bank.deposit(1000, '18/07/2023');
        expect(() => bank.withdraw(1500, '19/07/2023')).toThrow('Insufficient funds');
    });
      

    it('should print the balance in reverse chronological order ', () => {
        bank.deposit(1000, '16/07/2023');
        bank.deposit(1000, '17/07/2023');
        bank.withdraw(1000, '18/07/2023');
    // PSEUDO to help me finish writting the test
    // expect printStatement() =
    // date || credit || debit || balance
    // 18/07/2023 || || 1000.00 || 2000.00
    // 17/07/2023 || 1000.00 || || 2000.00
    // 17/07/2023 || 1000.00 || || 1000.00`
    // expect(bank.printStatement()).toContain('date || credit || debit || balance');
    // });
      
      const expectedStatement = 
      `date || credit || debit || balance 
      18/07/2023 || || 1000.00 || 1000.00
      17/07/2023 || 1000.00 || || 2000.00
      16/07/2023 || 1000.00 || || 1000.00`;
    
      const receivedStatement = bank.printStatement();
    
      // removes all whitespace from the string in order for the tests to pass
      const normalizedExpected = expectedStatement.replace(/\s+/g, ' ').trim();
      const normalizedReceived = receivedStatement.replace(/\s+/g, ' ').trim();
    
      expect(normalizedReceived).toEqual(normalizedExpected);
    });
});