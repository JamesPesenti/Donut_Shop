import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import BottomTabs from "./navigators/BottomTabNavigator"

import { Amplify } from 'aws-amplify'
import config from "./aws-exports"

Amplify.configure({...config, Analytics: {disabled: true}})

import { withAuthenticator } from "aws-amplify-react-native"


export default withAuthenticator(App) = () => {
  return (
    <>
        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>
      <StatusBar type="auto" />
    </>
  );
}

