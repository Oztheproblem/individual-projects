import React from 'react';
import { render } from '@testing-library/react';
import { taxRate, jsonData, calculateOrderTotal } from './receipt';




//simple test to expect that the tax rate is identical to 0.0864
describe('receipts', () => {
     // create a mock order to call upon in tests
    const order = [ { product: 'Cafe Latte', quantity: 2 },];

    it('should have the correct tax rate', () => {
       expect(taxRate).toEqual(0.0864);    
    });

    it('should calculate the corrct order total price', () => {
        // create a mock order
        // const order = [ { product: 'Cafe Latte', quantity: 2 },];

        const testOrder = calculateOrderTotal(order);
        expect(testOrder).toEqual(4.75 * 2);
    });


    it('should calculate the correct tax rate', () => {
        const testOrder = calculateOrderTotal(order);
        const taxAmount = testOrder * 0.0864;
        expect(taxAmount).toEqual(testOrder * taxRate);
    });
});