import React from 'react';
import { List, Avatar } from 'react-native-paper';

const ProductList = ({ product, strCurrency }) => {
  let price;
  if (strCurrency === 'euro') {
    price = `${product.priceEuro} €`;
  } else if (strCurrency === 'dollars') {
    price = `${product.priceUsd} $`;
  } else if (strCurrency === 'pounds') {
    price = `${product.pricePounds} £`;
  }

  return (
    <List.Item
			title={product.name}
			key={product.id}
			description={`Price: ${price} Units: ${product.units}`}
			left={props => <Avatar.Image size={24} source={{ uri: product.image }} />}
    />
  );
};

export default ProductList;
