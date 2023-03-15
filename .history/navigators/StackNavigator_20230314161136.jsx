import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from "../screens/MenuScreen"
import OrderScreen from "../screens/OrderScreen"
// import CartScreen from "../screens/CartScreen"
import RewardsScreen from '../screens/RewardsScreen';

const Stack = createNativeStackNavigator()

const ScreenNavigator = () => {
   return (
     <>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Menu" component={MenuScreen} />
            {/* <Stack.Screen name="SignInScreen" component={SignInScreen} /> */}
            <Stack.Screen name="Order" component={OrderScreen} />
            {/* <Stack.Screen name="Cart" component={CartScreen} /> */}
            <Stack.Screen name="Rewards" component={RewardsScreen} />
        </Stack.Navigator>
     </>
  )
}

export default ScreenNavigator
