import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const HomeTab = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the provided API
    axios.get('https://fakestoreapi.com/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleAddToCart = (productName) => {
    // Pass the item to the Cart screen via navigation
    navigation.navigate('Cart', { item: productName });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.title}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <Button
              title="Add to Cart"
              onPress={() => handleAddToCart(item.title)}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      title: {
        fontSize: 24,
        marginBottom: 20,
      },
      productContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
      },
      productImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
      },
      productName: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      productPrice: {
        fontSize: 16,
      },
      productDescription: {
        fontSize: 14,
      },
});

export default HomeTab;
