import React from "react";

//React Navigation Module
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


import { View } from "react-native";


import WelcomeScreen from "./app/screens/WelcomeScreen";
import UserScreen from "./app/screens/UserScreen";

const Stack = createNativeStackNavigator();




export default function App() {
  return <WelcomeScreen />;
  <NavigationContainer>
    <Stack.Navigatior initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen}/> 
      <Stack.Screen name="User" component={UserScreen}/>
    </Stack.Navigatior>
  </NavigationContainer>;
 
}