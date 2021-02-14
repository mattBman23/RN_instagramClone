import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Landing} from './components/auth/Landing';
import {Register} from './components/auth/Register';
import * as firebase from 'firebase';
import {firebaseConfig} from './myConfigs/firebase';

// make sure no firebase app is running
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();
export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setLoaded(true);
      } else {
        setLogin(true);
        setLoaded(true);
      }
    });
  }, []);

  return !loaded ? (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text>Loading</Text>
    </View>
  ) : login ? (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text>User is login</Text>
    </View>
  ) : (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
