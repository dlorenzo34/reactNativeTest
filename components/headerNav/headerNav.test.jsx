import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HeaderNav from './HeaderNav';

describe('HeaderNav', () => {
  test('renders correctly', () => {
    const { getByText, getByTestId } = render(
      <HeaderNav handleCurrencyChange={() => {}} />
    );

    expect(getByText('Drinks')).toBeTruthy();
    expect(getByText('Change currency:')).toBeTruthy();
    expect(getByTestId('menu-button')).toBeTruthy();
  });

  test('opens and closes the menu', () => {
    const { getByTestId, getByText } = render(
      <HeaderNav handleCurrencyChange={() => {}} />
    );

    const menuButton = getByTestId('menu-button');

    fireEvent.press(menuButton);
    expect(getByText('Euro')).toBeTruthy();
    expect(getByText('Pounds')).toBeTruthy();
    expect(getByText('Dollars')).toBeTruthy();

    fireEvent.press(menuButton);
    expect(() => getByText('Euro')).toThrow();
    expect(() => getByText('Pounds')).toThrow();
    expect(() => getByText('Dollars')).toThrow();
  });

  test('handles currency change', () => {
    const handleCurrencyChange = jest.fn();
    const { getByTestId, getByText } = render(
      <HeaderNav handleCurrencyChange={handleCurrencyChange} />
    );

    const menuButton = getByTestId('menu-button');

    fireEvent.press(menuButton);
    fireEvent.press(getByText('Euro'));

    expect(handleCurrencyChange).toHaveBeenCalledWith('euro');
  });
});
