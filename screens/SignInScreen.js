// SignInScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (username && password) {
      navigation.navigate('HomeScreen');
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>E-COMMERCE APP</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign In" onPress={handleSignIn} />
      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
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
  input: {
    width: '80%',
    margin: 10,
    padding: 10,
    borderWidth: 1,
  },
  signupText: {
    margin: 20,
    color: 'blue',
  },
});

export default SignInScreen;
