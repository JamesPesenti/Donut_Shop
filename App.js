import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import BottomTabs from "./navigators/BottomTabNavigator"
import AuthContextProvider from "./src/context/AuthContext"

import { Amplify, Auth } from 'aws-amplify'
import config from "./aws-exports"

Amplify.configure({...config, Analytics: {disabled: true}})
Auth.configure(config);

import { withAuthenticator } from "aws-amplify-react-native"
// import { withAuthenticator } from "./node_modules/aws-amplify-react-native"


const App = () => {
  return (
    <>
        <NavigationContainer>
          <AuthContextProvider>
            <BottomTabs />
          </AuthContextProvider>
        </NavigationContainer>
      <StatusBar type="auto" />
    </>
  );
}

export default App
