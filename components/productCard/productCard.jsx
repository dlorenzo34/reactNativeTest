import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const ProductCard = ({ product, strCurrency, onSelect }) => {
  let price;
  if (strCurrency === 'euro') {
    price = `${product.priceEuro} €`;
  } else if (strCurrency === 'dollars') {
    price = `${product.priceUsd} $`;
  } else if (strCurrency === 'pounds') {
    price = `${product.pricePounds} £`;
  }

  return (
    <TouchableOpacity onPress={onSelect}>
      <Card style={styles.card}>
        <Card.Cover style={styles.image} source={{ uri: product.image }} />
        <Card.Content style={styles.content}>
          <Title>{product.name}</Title>
          <Paragraph>{product.units} units</Paragraph>
          <Paragraph>{`Price: ${price}`}</Paragraph>
          {product.selected && (
            <View style={styles.selectedBadge}>
              <Text style={styles.selectedBadgeText}>1</Text>
            </View>
          )}
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    display: 'inline-block',
    width: '100%',
    margin: 10,
    height: 225,
  },
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: 100,
    objectFit: 'contain',
  },
  selectedBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#005B96',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedBadgeText: {
    color: 'white',
  },
  content: {
    paddingTop: 100,
  },
});

export default ProductCard;
