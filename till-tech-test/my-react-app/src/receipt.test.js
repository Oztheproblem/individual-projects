import React from 'react';
import { render } from '@testing-library/react';
import { taxRate } from './receipt';

describe('receipts', () => {
    it('should have the correct tax rate', () => {
       expect(taxRate).toEqual(0.0864);    
    });
});