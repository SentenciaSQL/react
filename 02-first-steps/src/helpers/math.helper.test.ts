import { describe, expect, test } from 'vitest'
import { add, multiply, substract, divide } from './math.helper'

describe('add', () => {
    test('should add two positives numbers', () => {
        // ! 1. Arrange
        const a = 1;
        const b = 2;

        // ! 2. Act
        const result = add(a, b);

        // ! 3. Assert
        expect(result).toBe(a + b);
    });

    test('should add two negative numbers', () => {
        // ! 1. Arrange
        const a = -2;
        const b = -4;

        // ! 2. Act
        const result = add(a, b);

        // ! 3. Assert
        expect(result).toBe(a + b);
    })
});

describe('substrac', () => {
    test('should substract two positives numbers', () => {
        const a = 10;
        const b = 2;

        const result = substract(a, b);

        expect(result).toBe(a - b);
    });
    test('should substract two negative numbers', () => {
        const a = -10;
        const b = -20;

        const result = substract(a, b);

        expect(result).toBe(a - b);
    });
});

describe('multiply', () => {
    test('should multiply two positives numbers', () => {
        const a = 5;
        const b = 5;

        const result = multiply(a, b);

        expect(result).toBe(a * b);
    });
    test('should multiply two negative numbers', () => {
        const a = 0;
        const b = -5;

        const result = multiply(a, b);

        expect(result).toBe(a * b);
    });
});

describe('divide', () => {
    test('should divide two positives numbers', () => {
        const a = 5;
        const b = 5;

        const result = divide(a, b);

        expect(result).toBe(a / b);
    });
});
