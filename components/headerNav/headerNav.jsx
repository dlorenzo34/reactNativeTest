import React, { useState } from 'react';
import { Appbar, Menu } from 'react-native-paper';
import { Text } from 'react-native';

const HeaderNav = ({ handleCurrencyChange }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuCoordinates, setMenuCoordinates] = useState({ x: 0, y: 0 });

  const _showMenu = (event) => {
    setMenuCoordinates({
      x: event.nativeEvent.pageX,
      y: event.nativeEvent.pageY,
    });
    setMenuVisible(true);
  };

  const _hideMenu = () => {
    setMenuVisible(false);
  };

  const _handleMore = (event) => {
    _showMenu(event);
  };

  return (
    <Appbar.Header>
      <Appbar.Content title="Drinks" />
      <Text>Change currency:</Text>
      <Appbar.Action icon="dots-vertical" onPress={_handleMore}/>
      <Menu
        visible={menuVisible}
        onDismiss={_hideMenu}
        anchor={{ x: menuCoordinates.x, y: menuCoordinates.y }}
      >
        <Menu.Item
          leadingIcon="currency-eur"
          onPress={() => handleCurrencyChange('euro')}
          title="Euro"
        />
        <Menu.Item
          leadingIcon="currency-gbp"
          onPress={() => handleCurrencyChange('pounds')}
          title="Pounds"
        />
        <Menu.Item
          leadingIcon="currency-usd"
          onPress={() => handleCurrencyChange('dollars')}
          title="Dollars"
        />
      </Menu>
    </Appbar.Header>
  );
};

export default HeaderNav;