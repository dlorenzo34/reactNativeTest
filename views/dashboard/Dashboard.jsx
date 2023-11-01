import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ProductCard from '../../components/productCard/productCard';

const Dashboard = ({ strCurrency, objProducts, handleProductSelect }) => {
	return (
		<ScrollView>
			{objProducts ?
				<View style={{ flexDirection:'row', flexWrap:'wrap', justifyContent: 'space-around' }}>
					{objProducts.map((product) => (
						<ProductCard
							key={product.id}
							product={product}
							strCurrency={strCurrency}
							onSelect={() => handleProductSelect(product.id)}	
						/>
					))}
				</View>
				: 
				<Text>Loading products</Text>
			}
		</ScrollView>
	)
}

export default Dashboard;