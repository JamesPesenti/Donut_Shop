import { Text, View, Pressable, Image, StyleSheet } from 'react-native'


const AddToCartButton = ({ onPress }) => {
  return (
    <>
        <View style={{marginTop: 20}}>
             <Image 
                onPress={onPress}
                style={styles.donutCart} 
                source={{ uri: "https://t4.ftcdn.net/jpg/03/79/12/45/240_F_379124566_BgPOU461BzC18wP3HbgOFxc1FIWrR45T.jpg"}}
             />
        </View>
    </>
  )
}

export default AddToCartButton


const styles = StyleSheet.create({
  donutCarty: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 5,
    borderColor: "pink",
    backgroundColor: "pink",
    padding: 40,
    width: 120,
    height: 50,
    elevation: 3.3,
    marginTop: 50,
    marginBottom: 0,
  
  },
  image: {
    width: 120, 
    height: 50,
    borderRadius: 10,
  },
  
})
