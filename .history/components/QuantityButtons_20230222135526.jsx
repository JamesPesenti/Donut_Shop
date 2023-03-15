import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from "@expo/vector-icons"

const QuantityButtons = ({ quantity, setQuantity }) => {

const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1))
  }
  const onPlus = () => {
    setQuantity(Math.min(12, quantity + 1))
  }


  return (
    <>
        <View style={styles.buttonStyles}>
              <AntDesign 
                name={'minuscircleo'}
                size={35}
                color="black"
                onPress={onMinus}
              />
                <Text style={styles.buttonText}>{quantity}</Text>
              <AntDesign 
                name={'pluscircleo'}
                size={35}
                color="black"
                onPress={onPlus}
              />
      </View>
    </>
  )
}

export default QuantityButtons

const styles = StyleSheet.create({
    buttonStyles: {
        flexDirection: "row", 
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 30,
        width: 110,
        height: 60,
      },
      buttonText: {
        marginHorizontal: 5,
      },
})