import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from '../../views/dashboard/Dashboard';
import Cart from '../../views/cart/Cart';

const Tab = createBottomTabNavigator();

const BottomNav = ({strCurrency, objProducts, handleProductSelect}) => {

  function DashboardWithCurrency() {
    return (
      <Dashboard
        strCurrency={strCurrency}
        objProducts={objProducts}
        handleProductSelect={handleProductSelect}
      />
    );
  }

  function CartWithItems() {
    return (
      <Cart
        objProducts={objProducts}
        strCurrency={strCurrency}
      />
    )
  }

  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
    >
      <Tab.Screen
        name="Products"
        component={DashboardWithCurrency}
        options={{
          tabBarLabel: 'Products',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="My cart"
        component={CartWithItems}
        options={{
          tabBarLabel: 'My cart',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shoppingcart" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNav;