import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { getCollection } from '../../actions/getCollection';
import BottomNav from "../../components/bottomNav/bottomNav";
import HeaderNav from "../../components/headerNav/headerNav";

const fbCollection = 'products';

const Shop = () => {
	const [strCurrency, setStrCurrency] = useState('euro');
	const [objProducts, setObjProducts] = useState(false);

  const handleCurrencyChange = (strNewCurrency) => {
    setStrCurrency(strNewCurrency);
  }

	const handleProductSelect = (productId) => {
    const updatedProducts = objProducts.map((product) => {
      if (product.id === productId) {
        return { ...product, selected: !product.selected };
      }
      return product;
    });
    setObjProducts(updatedProducts);
  };

	useEffect(() => {
		getCollection(fbCollection)
			.then((collectionData) => {
				const availableProducts = collectionData.filter((product) => !product.soldOut);
				setObjProducts(availableProducts);
			})
			.catch((error) => {
				console.error('Error:', error);
		});
	}, []);

	return (
		<View style={{flex:1}}>
			<HeaderNav 
				handleCurrencyChange={handleCurrencyChange}
			/>
			<BottomNav
				strCurrency={strCurrency}
				objProducts={objProducts}
				handleProductSelect={handleProductSelect}
			/>
		</View>
	)
}

export default Shop;