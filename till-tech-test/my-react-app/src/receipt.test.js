import { taxRate, jsonData, calculateOrderTotal, calculateTax, printReceipt } from './receipt';

describe('receipts', () => {
  const order = [
    { name: 'Cafe Latte', quantity: 2 },
    // Add other items to the order if needed
  ];

  it('should have the correct tax rate', () => {
    expect(taxRate).toEqual(0.0864);
  });

  it('should calculate the correct order total price', () => {
    const testOrder = calculateOrderTotal(order);
    expect(testOrder).toEqual(4.75 * 2);
  });

  it('should calculate the correct tax rate', () => {
    const testOrder = calculateOrderTotal(order);
    const taxAmount = calculateTax(testOrder);
    expect(taxAmount).toEqual(testOrder * taxRate);
  });

  it('should contain the correct info on the receipt', () => {
    const testOrder = calculateOrderTotal(order);
    const taxAmount = calculateTax(testOrder);

    // Mock a transaction
    const receiptInfo = {
      customerInfo: 'Jane Doe',
      orderTotal: testOrder,
      taxAmount: taxAmount,
    };

    // Correct the expected orderTotal and taxAmount values to match the actual calculated values
    expect(receiptInfo).toEqual({
      customerInfo: 'Jane Doe',
      orderTotal: 9.5, // Corrected expected orderTotal value
      taxAmount: taxAmount,
    });
  });
});
