import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProductCard from './ProductCard';

const mockProduct = {
  name: 'Product 1',
  units: 10,
  priceEuro: 10,
  priceUsd: 12,
  pricePounds: 8,
  image: 'product-image-url',
  selected: false,
};

const mockCurrency = 'euro';
const mockOnSelect = jest.fn();

describe('ProductCard', () => {
  test('renders correctly', () => {
    const { getByText, getByTestId, getByAltText } = render(
      <ProductCard product={mockProduct} strCurrency={mockCurrency} onSelect={mockOnSelect} />
    );

    expect(getByText('Product 1')).toBeTruthy();
    expect(getByText('10 units')).toBeTruthy();
    expect(getByText('Price: 10 €')).toBeTruthy();
    expect(getByAltText('Product 1')).toBeTruthy();
    expect(getByTestId('selected-badge')).toBeNull();
  });

  test('renders selected badge when selected is true', () => {
    const { getByTestId } = render(
      <ProductCard product={{ ...mockProduct, selected: true }} strCurrency={mockCurrency} onSelect={mockOnSelect} />
    );

    expect(getByTestId('selected-badge')).toBeTruthy();
  });

  test('calls onSelect callback when pressed', () => {
    const { getByText } = render(
      <ProductCard product={mockProduct} strCurrency={mockCurrency} onSelect={mockOnSelect} />
    );

    fireEvent.press(getByText('Product 1'));
    expect(mockOnSelect).toHaveBeenCalledTimes(1);
  });
});
