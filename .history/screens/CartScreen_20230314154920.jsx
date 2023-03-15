import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import CartDonutItem from "../components/CartDonutItem"
import { DataStore, Auth } from "aws-amplify"

import { Donut, CartDonut } from "../src/models"


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
      cartDonuts.map(cartDonut => 
        DataStore.query(Donut, cartDonut.productID),
      ),
    );
    // assign donuts to the cart items
    setCartDonuts(currentCartDonuts =>
      currentCartDonuts.map(cartDonut => ({
        ...cartDonut,
        donut: donuts.find(d => d.id === cartDonut.donutID),
      })),
      )
  
   getDonuts();
  }, [];

  const totalPrice = cartDonuts.reduce(
    (summedPrice, donut) =>
      summedPrice + (donut?.donut?.price || 0) * donut.quantity,
    0,
  );

  const onCheckout = () => {
    navigation.navigate({totalPrice})
  }


  return (
    <>
      <View style={{padding: 10}}>
      {/* Render Product Componet */}
      <FlatList
        data={cartDonuts}
        renderItem={({item}) => <CartDonutItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text style={{fontSize: 18}}>
              Subtotal ({cartDonuts.length} items):{' '}
              <Text style={{color: '#e47911', fontWeight: 'bold'}}>
                ${totalPrice.toFixed(2)}
              </Text>
            </Text>
            <Button
              text="Proceed to checkout"
              onPress={onCheckout}
              containerStyles={{
                backgroundColor: '#f7e300',
                borderColor: '#c7b702',
              }}
            />
          </View>
        )}
      />
    </View>
    </>
  )
}

export default CartScreen

const styles = StyleSheet.create({})