import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import {useNavigation} from '@react-navigation/native';
import CartDonutItem from "../components/CartDonutItem"
import { DataStore, Auth } from "aws-amplify"

import { Donut, CartDonut } from "../src/models"
import cartDonutItem from "../components/CartDonutItem"


const CartScreen = () => {

  const [cartDonuts, setCartDonuts] = useState([])

  const navigation = useNavigation()


  const getCartDonuts = async () => {
    const userData = await Auth.currentAuthenticatedUser()
    DataStore.query(CartDonut, cd => cd.userID("eq", userData.attributes.sub)).then(setCartDonuts)
  }

  useEffect(() => {
    getCartDonuts()
  }, [])

  useEffect(() => {
    if (cartDonuts.filter(cd => !cd.donut).length === 0) {
      return
    }
  }, [])

// Query all donuts that are in cart
  const getDonuts = async () => {
    const donuts = await Promise.all(
      cartDonuts.map(cartDonut => DataStore.query(Donut, cartDonut.productID),
      ),
    );

    // assign donuts to the cart items
    setCartDonuts(currentCartDonuts =>
      currentCartDonuts.map(cartDonut => ({
        ...cartDonut,
        donut: donuts.find(d => d.id === cartDonut.donutID),
      })),
      )
  }




  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})