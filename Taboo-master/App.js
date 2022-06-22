<<<<<<< Updated upstream
import React from 'react';
import {View} from 'react-native';
import {WelcomeScreen} from './app/screens/WelcomeScreen'
export default function App() {

  return <WelcomeScreen></WelcomeScreen>
  
}
=======
import React from "react";

//React Navigation Module
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import SignUpScreen from "./app/screens/SignUpScreen";

import { View } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator 
      initialRouteName="SignUpScreen">
      
  <Stack.Screen
      name=" "
      component={WelcomeScreen} />

  <Stack.Screen name="SignUp" 
      component={SignUpScreen}
      options={({route}) => ({ Title: "Singup"})}/>
  </Stack.Navigator>
</NavigationContainer>)

  }
 
>>>>>>> Stashed changes

