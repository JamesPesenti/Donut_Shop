import { 
  Pressable, 
  Animated, 
  FlatList, 
  ScrollView, 
  View, 
  Text, 
  Dimensions, 
  Image, 
  ImageBackground, 
  StyleSheet, 
  TouchableOpacity
}
from "react-native"
import { auth } from "../firebase"
import { useRef, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import HomeTitle from "../components/HomeTitle"
import AboutFadeInView from "../components/AboutFadeInView"
import AboutUsModal from "../components/AboutUsModal"
import WhatsNewFeature from '../components/Features&Headers/WhatsNewFeature'
import WhatsNewHeader from '../components/Features&Headers/WhatsNewHeader'
import FavoriteItem from "../components/FavoriteItem"

import { DataStore } from "@aws-amplify/datastore"
import { Favorites } from "../src/models"


const HomeScreen = () => {

  const navigation = useNavigation()
  const [headerShown, setHeaderShown] = useState(false);
  const [favorites, setFavorites] = useState([])

  const translation = useRef(new Animated.Value(-100)).current;
  const width = Dimensions.get("window").width

  // Query for favorite donuts
  useEffect(() => {
    DataStore.query(Favorites).then(setFavorites)
  }, [])
  console.log(setFavorites)


  // Header Animation
  useEffect(() => {
    Animated.timing(translation, {
      toValue: headerShown ? -100 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [headerShown]);



  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (

  <>
    <ImageBackground
        imageStyle={{opacity: .7}}
        resizeMode="cover"
        style={styles.imageBackground}  
    >
        {/* Animated Header */}
          <Animated.View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 100,
              transform: [
                { translateY: translation },
              ],
            }}
          >
              <HomeTitle />
          </Animated.View>

     <ScrollView
          style={{ flex: 1 }}
          // onScroll will be fired every 16ms
          scrollEventThrottle={1}
          onScroll={(e) => {
          const scrolling = e.nativeEvent.contentOffset.y;
              if (scrolling > 100) {
                setHeaderShown(true);
              } else {
                setHeaderShown(false);
              }
            }}
      >
              {/* News, or Seasonal Flavors */}
              <View style={styles.container}>
                <WhatsNewHeader />
                      <ScrollView style={{overflow: "hidden", marginTop: 100, paddingBottom: 0}}>
                        <View>
                          <ImageBackground
                            imageStyle={{opacity: 1}}
                            style={{ opacity: 1,
                            height: "100%",
                            width: "100%",
                            backgroundColor: "transparent",
                            borderWidth: 4,
                            borderColor: "transparent",
                            paddingTop: 0,
                            overflow: "hidden",
                            justifyContent: "center"
                            }}
                            source={{uri: ("") }}
                          >
                          <ScrollView style={{marginVertical: 50, paddingBottom: 0}} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <WhatsNewFeature />
                          </ScrollView>
                      </ImageBackground>
                      </View>
                    </ScrollView>
                </View>
                <Text style={styles.favoritesText}>Your Favorites!</Text>
                          <FlatList 
                                data={favorites}
                                horizontal
                                snapToInterval={width + -120}
                                decelerationRate={"fast"}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({item}) => <FavoriteItem favorites={item} />}
                          />
                {/* About Us */}
                <AboutFadeInView>
                    <View style={styles.container}>
                        <Text style={styles.aboutUsText}>About us!</Text>
                    </View>
                    <View style={{overflow: "hidden", marginTop: 100}}>
                        <View style={{marginBottom: 50}}>
                          <AboutUsModal />
                        </View>
                    </View>
                </AboutFadeInView>
          </ScrollView>
      {/* <View style={styles.container}>
        <Text>{auth.currentUser?.email}</Text>
          <TouchableOpacity
            onPress={handleSignOut}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign out</Text>
          </TouchableOpacity>
      </View> */}
   </ImageBackground>
  </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center", 
    marginTop: 50,
    padding: 0,
    overflow: "hidden"
},
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  imageBackground: {
    opacity: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    overflow: "hidden"
  },
newHeader: {
  textAlign: "center",
  color: "red",
  flexDirection: "row",
  fontSize: 25,
  fontWeight: "900",
  letterSpacing: 4,
  marginTop: 100 
},
andHeader: {
      textAlign: "center",
      color: "green",
      flexDirection: "row",
      fontSize: 25,
      fontWeight: "900",
      letterSpacing: 4,
      marginTop: 100
    },
holidayHeader: {
  textAlign: "center",
  color: "#BBC2CC",
  flexDirection: "row",
  fontSize: 26,
  fontWeight: "900",
  letterSpacing: 4,
  marginTop: 100
},
donutHeader: {
    color: "#d4af37",
    marginTop: 26,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "900",
    letterSpacing: 3,
},
aboutUsText: {
  textAlign: "center",
  color: "#ED91AD",
  flexDirection: "row",
  fontSize: 25,
  fontWeight: "900",
  letterSpacing: 4,
  marginTop: 0 
},
favoritesText: {
 color: "#ED91AD",
 fontSize: 25,
 textAlign: "center",
 marginTop: 50,
 marginVertical: 20
}
})






        {/* <Text>{auth.currentUser?.email}</Text>  */}
        {/* <TouchableOpacity
      //     onPress={handleSignOut}
      //     style={styles.button}
      //   >
      //     <Text style={styles.buttonText}>Sign out</Text>
      //   </TouchableOpacity> */}









