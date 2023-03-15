import { useState, useRef, useEffect } from 'react';
import { StyleSheet, Animated, Image, View, Text, Pressable, ScrollView, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// import QuantityButtons from "./QuantityButtons"


import Icon from 'react-native-vector-icons/Ionicons'


const DonutItem = ({ donut }) => {

  const [quantity, setQuantity] = useState(1)
  const navigation = useNavigation();

  // const height = Dimensions.get("window").height
  // const width = Dimensions.get("window").width

  // const onPress = () => {
  //   navigation.navigate("Cart", {id: favorite.id});
  // };

  const translation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(translation, {
      fromValue: 0,
      toValue: 135,
      duration: 1000,
      useNativeDriver: false,
    }).start()
  }, [])


  return (
   <>
   
   <Pressable onPress={() => navigation.navigate("Cart", {id: donut.id})} style={styles.productDetails}>
        {/* Product Card Styles */}
      <View style={{flex: 1, flexDirection: 'row', marginHorizontal: 0, marginVertical: 0}}>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: "center", alignItems: 'center', marginHorizontal: 20}}>
            <Image 
                style={{flex: 1, borderRadius: 100, width: 150, height: 150, resizeMode: 'contain'}} 
                source={{uri: donut.image }} 
            />
        <View>
            <Text style={styles.itemText}>{donut.flavor}</Text>
            <Text style={styles.ratingText}>{donut.avgRating}</Text>

         {/* Ratings */}
         {/* <View style={styles.ratingsContainer}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <Image
              key={`${donut.id}-${i}`}
              style={{margin: 3, justifyContent: "center", alignItems: "center", textAlign: "center", width: 25, height: 25}}
              source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjZX0cQJnAwjJLV1G34uHrC1QzDcQ6na52dQ&usqp=CAU"}}
            />
          ))}
        </View> */}
            <Text style={styles.caloriesText}>{donut.calories} Cal</Text>
            <Text style={styles.caloriesText}>${donut.price}</Text>
            <View style={{width: 320, paddingHorizontal: 30}}>
                <Text numberOfLines={2} style={styles.caloriesText}>{donut.descriptiion}</Text>
            </View>
        </View>
    </View>
    </View>
    </Pressable>
    </>
  );
};

export default DonutItem;

const styles = StyleSheet.create({
   
      // modal display position on screen
      centeredView: {
       flexDirection: "row",
       justifyContent: "center",
       alignItems: "center",
       marginRight: 10,
       marginLeft: 0,
       marginTop: 0,
     },
     // view when you open modal
    //  areaView: {
    //    justifyContent: "center",
    //    alignItems: "center",
    //    backgroundColor: "transparent",
    //    width: width,
    //    height: height,
    //    elevation: 3.3,
    //    overflow: "visible",
    //    marginBottom: 50
    //  },
     openView: {
       backgroundColor: "transparent",
     },
      itemText: {
        fontSize: 16,
        letterSpacing: 1,
        padding: 12,
        color: "black",
        borderRadius: 10,
        marginVertical: -5,
        alignItems: "center",
        textAlign: "center"
       },
       ratingText: {
        fontSize: 14,
        letterSpacing: 1,
        padding: 12,
        color: "black",
        borderRadius: 10,
        marginVertical: -5,
        alignItems: "center",
        textAlign: "center"
       },
       caloriesText: {
        numOfLines: 1,
        fontSize: 14,
        letterSpacing: 1,
        padding: 12,
        color: "black",
        borderRadius: 10,
        alignItems: "center",
        textAlign: "center"
       },
       priceText: {
        fontSize: 16,
        fontWeight: "bold",
        letterSpacing: 1,
        padding: 12,
        color: "black",
        borderRadius: 10,
        marginVertical: -10,
        alignItems: "center",
        textAlign: "center"
       },
    //  addItemButton: {
    //   justifyContent: "center",
    //   alignItems: "center",
    //   borderRadius: 10,
    //   borderWidth: 2,
    //   borderColor: "turquoise",
    //   padding: 10,
    //   width: 120,
    //   elevation: 3,
    //   marginTop: 20,
    //   backgroundColor: "white",
    // },
     dotIndicator: {
      margin: 5, 
      marginBottom: 0, 
      width: 25, 
      height: 25, 
      backgroundColor: "blue", 
      borderRadius: 100
     },
  
     textStyle: {
       color: "black",
       textAlign: "center",
     },
     titleText: {
       fontSize: 20,
       color: "black",
       textAlign: "center",
       marginTop: 100
     },
     text: {
       color: "white",
       justifyContent: "center",
       textAlign: "center",
       alignItems: "center",
       marginHorizontal: 5,
       marginBottom: 10,
       marginTop: 15,
       backgroundColor: "transparent",
       padding: 10,
       borderRadius: 5,
       borderWidth: 1,
       borderColor: "white",
     },
     productDetails: {
        flex: 1,
        maxLength: 3,
        numberOfRows: 1,
        justifyContent: "center",
        flexDirection: 'row',
        borderWidth: 0,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        paddingHorizontal: 50,
        marginVertical: 50,
        marginLeft: 20,
        marginRight: 50,
        marginHorizontal: 0
     },
     ratingsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      textAlign: "center",
      marginVertical: 5,
    },
    star: {
      margin: 2,
    },
    // MenuFadeInView
    menuText: {
      color: "white",
      fontSize: 0,
      fontWeight: "700",
      letterSpacing: 2,
      textAlign:"center",
      alignItems: "center",
      marginTop: -23,
      marginRight: 1
    },
    textStyle: {
      color: "#ED91AD",
      textAlign: "center",
      letterSpacing: 1,
      fontSize: 16,
      fontWeight: "bold"
    },
    imageBackground: {
      opacity: 1,
      height: "100%",
      width: "100%",
      backgroundColor: "transparent",
      overflow: "hidden"
    },
    titleContainer: {
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      marginRight: 0,
      marginTop: 50,
    },
    titleStyle: {
      fontSize: 30,
      letterSpacing: 3,
      color: "#ED91AD",
      marginVertical: 0
    },
   card: {
    backgroundColor: "black",
    height: 100,
    width: 120,
    borderRadius: 20,
    borderWidth: .5,
    borderColor: "transparent",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingBottom: 40,
    marginBottom: 20
  },
  image: {
    borderRadius: 20,
    marginTop: -80,
    flexDirection: "row",
    width: 300,
    height: 380,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    resizeMode: "contain",
  },
})
