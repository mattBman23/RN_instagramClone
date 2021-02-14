import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import firebase from 'firebase';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <View>
      <TextInput
        placeholder="email"
        onChangeText={(newEmail) => setEmail(newEmail)}
      />
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(newPassword) => setPassword(newPassword)}
      />

      <Button onPress={() => signUp()} title="Login" />
    </View>
  );
};
