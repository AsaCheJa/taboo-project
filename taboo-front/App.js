import React from "react";

//React Navigation Module
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from "./components/Login";
import Register from "./components/Register";

import { View } from "react-native";

const Stack = createNativeStackNavigator();

function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator 
      initialRouteName="Login">
      
    <Stack.Screen name="Login" component={Login} />

    <Stack.Screen name="SignUp" component={Register}/>
  </Stack.Navigator>
</NavigationContainer>)

  }
export default App;