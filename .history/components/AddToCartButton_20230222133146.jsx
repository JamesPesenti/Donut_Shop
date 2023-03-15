import { Text, View, Pressable, Image, StyleSheet } from 'react-native'


const AddToCartButton = ({ onPress }) => {
  return (
    <>
        <View style={{marginTop: 20}}>
             <Image 
                onPress={onPress}
                style={styles.donutCart} 
                source={{ uri: "https://t3.ftcdn.net/jpg/01/67/32/68/240_F_167326839_I5YYpfiPiE2GZIJbXv8ti1yo4rakGD6O.jpg"}}
             />
        </View>
    </>
  )
}

export default AddToCartButton


const styles = StyleSheet.create({
  donutCart: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 5,
    borderColor: "pink",
    backgroundColor: "pink",
    padding: 40,
    width: 140,
    height: 80,
    elevation: 3.3,
    marginTop: 50,
    marginBottom: 80,
  },
})
