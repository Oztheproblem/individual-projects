import React from 'react';
import { render } from '@testing-library/react';
import { taxRate, jsonData } from './receipt';



const order = [
    { product: 'Cafe Latte', quantity: 2 },
];

//simple test to expect that the tax rate is identical to 0.0864
describe('receipts', () => {
    it('should have the correct tax rate', () => {
       expect(taxRate).toEqual(0.0864);    
    });

    it('should calculate the corrct order total price', () => {
        const testOrder = orderTotal(order);
        expect(orderTotal).toEqual(4.75*2);
    });

    // it('should have the correct price when tax is applied', () => {
    //     expect



});