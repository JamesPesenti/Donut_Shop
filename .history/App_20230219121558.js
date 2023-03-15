import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import BottomTabs from "./navigators/BottomTabNavigator"


export default App = () => {
  return (
    <>
    <StatusBar type="auto" />
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </>
  );
}

