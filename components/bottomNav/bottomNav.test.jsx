import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BottomNav from './BottomNav';

const mockStrCurrency = 'usd';
const mockObjProducts = [{ id: 1, name: 'Product 1' }];
const mockHandleProductSelect = jest.fn();

describe('BottomNav', () => {
  test('renders correctly', () => {
    const { getByText, getByTestId } = render(
      <BottomNav
        strCurrency={mockStrCurrency}
        objProducts={mockObjProducts}
        handleProductSelect={mockHandleProductSelect}
      />
    );

    expect(getByText('Products')).toBeTruthy();
    expect(getByText('My cart')).toBeTruthy();
    expect(getByTestId('tab-bar')).toBeTruthy();
  });

  test('navigates to Products screen', () => {
    const { getByText } = render(
      <BottomNav
        strCurrency={mockStrCurrency}
        objProducts={mockObjProducts}
        handleProductSelect={mockHandleProductSelect}
      />
    );

    fireEvent.press(getByText('Products'));
  });

  test('navigates to My cart screen', () => {
    const { getByText } = render(
      <BottomNav
        strCurrency={mockStrCurrency}
        objProducts={mockObjProducts}
        handleProductSelect={mockHandleProductSelect}
      />
    );

    fireEvent.press(getByText('My cart'));
  });
});
