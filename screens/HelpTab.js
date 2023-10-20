import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelpTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email: abc@example.com</Text>
      <Text style={styles.text}>Contact No: 98673XXXX</Text>
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
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default HelpTab;
