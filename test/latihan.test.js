import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Counter, Greeting, AlertButton } from './latihan';

describe('Latihan Components', () => {
  test('Counter default value must be 0', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('0');
  });

  test('Increment works when button clicked', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    const incrementButton = screen.getByTestId('increment-button');
    fireEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent('1');
  });

  test('Decrement works when button clicked', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    const decrementButton = screen.getByTestId('decrement-button');

    fireEvent.click(decrementButton);
    expect(counterValue).toHaveTextContent('-1');
  });

  test('Reset the count using reset button', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    const incrementButton = screen.getByTestId('increment-button');
    const resetButton = screen.getByTestId('reset-button');

    fireEvent.click(incrementButton); 
    fireEvent.click(resetButton); 
    expect(counterValue).toHaveTextContent('0');
  });

  test('Greeting component displays user name', () => {
    render(<Greeting name="Iman Abdurrohman" />);
    const greetingText = screen.getByTestId('greeting');
    expect(greetingText).toHaveTextContent('Hello, Iman Abdurrohman');
  });

  test('Greeting component displays lecturer name', () => {
    render(<Greeting name="Pak Farid" />);
    const greetingText = screen.getByTestId('greeting');
    expect(greetingText).toHaveTextContent('Hello, Pak Farid');
  });

  test('Triggers alert with correct message when clicked', () => {
    window.alert = jest.fn(); 
    const message = 'Test Alert Message';

    render(<AlertButton message={message} />);
    const alertButton = screen.getByTestId('alert-button');

    fireEvent.click(alertButton);
    expect(window.alert).toHaveBeenCalledWith(message);

    window.alert.mockRestore(); 
  });
});
