import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from 'vitest';
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter', () => {
    test('should render with default values', () => {
        const name = 'Control de Nintendo';

        render(<ItemCounter name={name} />);

        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();
    });

    test('should render with custom quantity', () => {
        const name = 'Control de Nintendo';
        const quantity = 10;

        render(<ItemCounter name={name} quantity={quantity} />);

        expect(screen.getByText(quantity)).toBeDefined();
    });

    test('should increase count when +1 button is pressed', () => {
        render(<ItemCounter name={'Test item'} quantity={1} />);

        const [buttonAdd] = screen.getAllByRole('button');

        fireEvent.click(buttonAdd);

        expect(screen.getByText('2')).toBeDefined();

    });

    test('should decrease count when 11 button is pressed', () => {
        render(<ItemCounter name={'Test item'} quantity={5} />);

        const [, buttonDecrease] = screen.getAllByRole('button');

        fireEvent.click(buttonDecrease);

        expect(screen.getByText('4')).toBeDefined();

    });

    test('should not decrease count when -1 button is pressed and quantity is 1', () => {
        render(<ItemCounter name={'Test item'} quantity={1} />);

        const [, buttonDecrease] = screen.getAllByRole('button');

        fireEvent.click(buttonDecrease);

        expect(screen.getByText('1')).toBeDefined();

    });

    test('should change to red when count is 1', () => {
        const quantity = 1;
        const name = 'est item';
        render(<ItemCounter name={name} quantity={quantity} />);

        const itemText = screen.getByText(name);

        expect(itemText.style.color).toBe('red');
    });

    test('should change to black when count is grater than 1', () => {
        const quantity = 2;
        const name = 'est item';
        render(<ItemCounter name={name} quantity={quantity} />);

        const itemText = screen.getByText(name);

        expect(itemText.style.color).toBe('black');
    });
});