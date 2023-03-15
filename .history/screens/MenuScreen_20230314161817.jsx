import { Image, ScrollView, Dimensions, Animated, ImageBackground, StyleSheet, Text, View, FlatList } from 'react-native'
import { useState, useEffect, useRef } from 'react'
import { useNavigation, useRoute } from "@react-navigation/native"
import DonutItem from "../components/DonutItem"
import { DataStore } from "@aws-amplify/datastore"
import { Donut } from "../src/models"

import MenuFadeInView from "../components/MenuFadeInView"
import AddToCartButton from '../components/AddToCartButton'

const MenuScreen = () => {
    const navigation = useNavigation()

    // const route = useRoute()
    // const id = route.params.id
    const width = Dimensions.get("window").width
    const height = Dimensions.get("window").height
    const [quantity, setQuantity] = useState(0)

    const totalPrice = () => {
      return (donuts.price * quantity).toFixed(2)
    }

    // DataStore menu query
    const [donuts, setDonuts] = useState([])
    

    useEffect(() => {
      DataStore.query(Donut).then(setDonuts)
    }, [])


    // Add donuts to cart
    const onAddToCart = async () => {
      await addDonutsToCart(donuts, quantity)
      navigation.navigate("CartScreen")
      console.log(onAddToCart)
    }

    const addDonutsToCart = async (donuts, quantity) => {
      // Get Cart or create new Cart
      let theCart = cart || (await createNewCart());
      if (!cart) {
          theCart = await createNewCart()
      } else {
          theCart = cart
      }
  }   
 


     // Animated Donut
     const translation = useRef(new Animated.Value(0)).current

     useEffect( () => {
         Animated.timing(translation, {
           fromValue: 0,
           toValue: 135,
           duration: 1000,
           useNativeDriver: false,
         }).start()
       }, [])
 
  

  return (
   <>
    <ImageBackground
      style={{width: width, height: height}}
      source={{uri: "https://media0.giphy.com/media/MJkPUQgZZHZ5jYHwlF/giphy.gif"}}
    >
      <ScrollView>
          {/* Menu Fade In Title */}
        <View style={styles.menuTitleContainer}>
            <MenuFadeInView>
                <Text style={styles.menuTitle}>Menu</Text>
            </MenuFadeInView>
        </View>

    {/*Animated Donut  */}
        <Animated.View
          style={{
            borderRadius: 100,
            borderColor: "transparent",
            borderWidth: 0,
            marginTop: 0,
            width: 120,
            height: 120,
            opacity: translation.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 1],
            }),
            backgroundColor: 'transparent',
            transform: [
              { translateX: translation },
              {
                rotate: translation.interpolate({
                  inputRange: [0, 70],
                  outputRange: ["0deg", "360deg"],
                }),
              }
            ],
          }}
        >
            <Image
              resizeMode="cover"
              style={styles.animatedImage}
              source={{ uri: "https://t4.ftcdn.net/jpg/01/07/00/69/240_F_107006927_2kvz3YtASQFZAwYm7Qqgwhn04vr9FE98.jpg" }}
            />
        </Animated.View>
        <View>
          <FlatList
            data={donuts} 
            horizontal={true}
            decelerationRate={"fast"}
            snapToInterval={width + -50}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <DonutItem donut={item} />}
          />
           <View style={styles.container}>
          <Text style={styles.addToCart}>Add {quantity} To Cart ${totalPrice()}</Text>
            <AddToCartButton onPress={onAddToCart}/>
        </View>
        </View>
      </ScrollView>
    </ImageBackground>
  </>
  )
}

export default MenuScreen

const styles = StyleSheet.create({
  animatedImage: {
    opacity: 1,
    width: 100,
    height: 100,    
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "pink", 
    borderWidth: .5, 
    borderRadius: 100
  },
  menuTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginRight: 0,
    marginTop: 50,
  },
  menuTitle: {
    fontSize: 30,
    letterSpacing: 3,
    color: "#ED91AD",
    marginBottom: 20
  },
  container: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  addToCart: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 20
  }
})