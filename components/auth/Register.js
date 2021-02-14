import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import firebase from 'firebase';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const signUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <View>
      <TextInput
        placeholder="name"
        onChangeText={(newName) => setName(newName)}
      />
      <TextInput
        placeholder="email"
        onChangeText={(newEmail) => setEmail(newEmail)}
      />
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(newPassword) => setPassword(newPassword)}
      />

      <Button onPress={() => signUp()} title="Sign Up" />
    </View>
  );
};
