import { createContext , useContext, useState, useEffect } from "react"
import { StyleSheet, Text, View } from 'react-native'

import { DataStore } from "aws-amplify" 
import { Order, Cart } from "../models"


// AKA OrderScreen
const OrderScreen = () => {
  return (
    <View>
      <Text>OrderScreen</Text>
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})