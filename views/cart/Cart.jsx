import React from 'react';
import { View, Text } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';
import ProductList from '../../components/productList/productList';
import { updateProductSoldOutStatus } from '../../actions/updateProducts';

const Cart = ({objProducts, strCurrency}) => {
	const selectedProducts = objProducts.filter((product) => product.selected);

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const totalPrice = selectedProducts.reduce((total, product) => {
    if (strCurrency === 'euro') {
      return total + product.priceEuro;
    } else if (strCurrency === 'dollars') {
      return total + product.priceUsd;
    } else if (strCurrency === 'pounds') {
      return total + product.pricePounds;
    }
    return total;
  }, 0);

  const handleCheckout = () => {
    selectedProducts.forEach((product) => {
      updateProductSoldOutStatus(product.id, true);
    });
    hideDialog();
  };

	return (
		<View>
      {selectedProducts.length > 0 ? (
        <View>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Checkout</Dialog.Title>
              <Dialog.Content>
                <Text variant="bodyMedium">Total: {totalPrice} {strCurrency}</Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={handleCheckout}>Checkout</Button>
                <Button onPress={hideDialog}>Close</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
          {selectedProducts.map((product) => (
            <ProductList product={product} strCurrency={strCurrency}/>
          ))}
          <Text>Your total is: {totalPrice} {strCurrency}</Text>
          <Button onPress={showDialog}>Checkout</Button>
        </View>
      ) : (
        <Text>Your cart is empty.</Text>
      )}
    </View>
	)
}

export default Cart;