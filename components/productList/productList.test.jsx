import React from 'react';
import { render } from '@testing-library/react-native';
import ProductList from './ProductList';

const mockProduct = {
  id: 1,
  name: 'Product 1',
  units: 10,
  priceEuro: 10,
  priceUsd: 12,
  pricePounds: 8,
  image: 'product-image-url',
};

const mockCurrency = 'euro';

describe('ProductList', () => {
  test('renders correctly', () => {
    const { getByText, getByTestId } = render(
      <ProductList product={mockProduct} strCurrency={mockCurrency} />
    );

    expect(getByText('Product 1')).toBeTruthy();
    expect(getByText('Price: 10 € Units: 10')).toBeTruthy();
    expect(getByTestId('product-avatar')).toBeTruthy();
  });

  test('displays the correct currency', () => {
    const { getByText } = render(
      <ProductList product={mockProduct} strCurrency="dollars" />
    );

    expect(getByText('Price: 12 $ Units: 10')).toBeTruthy();
  });

  test('displays the correct currency with pounds', () => {
    const { getByText } = render(
      <ProductList product={mockProduct} strCurrency="pounds" />
    );

    expect(getByText('Price: 8 £ Units: 10')).toBeTruthy();
  });
});
