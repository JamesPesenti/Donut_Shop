import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import BottomTabs from "./navigators/BottomTabNavigator"

import { Amplify } from 'aws-amplify'
import config from "./aws-exports"

Amplify.configure({...config, Analytics: {disabled: true}})

import { Authenticator } from "aws-amplify-react-native"
// import { withAuthenticator } from "./node_modules/aws-amplify-react-native"


const App = () => {
  return (
    <>
        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>
      <StatusBar type="auto" />
    </>
  );
}

export default Authenticator(App)
