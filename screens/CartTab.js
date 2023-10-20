import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const CartTab = ({ route }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (route.params && route.params.item) {
      // Add the item to the cart
      setCartItems([...cartItems, route.params.item]);
    }
  }, [route.params]);

  const handleRemoveItem = (item) => {
    // Remove the item from the cart
    const updatedCart = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(updatedCart);
  };

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCart}>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Text style={styles.cartItemName}>{item}</Text>
              <Button
                title="Remove"
                onPress={() => handleRemoveItem(item)}
                color="red"
              />
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  emptyCart: {
    fontSize: 16,
    color: 'gray',
  },
  cartItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  cartItemName: {
    fontSize: 18,
  },
});

export default CartTab;
