// import { createContext , useContext, useState, useEffect } from "react"
// import { FlatList, StyleSheet, Text, View } from 'react-native'
// import { useAuthContext } from "../src/context/AuthContext"
// import { DataStore } from "aws-amplify" 
// import { Order, Cart, Donut } from "../src/models/index"


// // AKA OrderScreen
// const OrderScreen = () => {

//   const { dbUser } = useAuthContext()

//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     DataStore.query(Order, o => o.userID("eq", dbUser.id)).then(setOrders);
//   }, [dbUser]);


//   const createOrder = async () => {
//     // create the order
//     const newOrder = await DataStore.save(
//       new Order({
//         userID: dbUser.id,
//         Restaurant: restaurant,
//         status: "NEW",
//         total: totalPrice,
//       })
//     )
//   }

//     const getOrder = async (id) => {
//       const order = await DataStore.query(Order, id)
//       return {...order}
//    }


//   return (
//     <>
//       <View>
//         <FlatList 
//           data={orders}
//           renderItem={({item}) => (
//             <>
//                 <Image 
//                   style={styles.image} 
//                   source={{ uri: item.image}}
//                 />
//                   <Text style={styles.flavor}>{item.flavor}</Text>
//                   <Text style={styles.total}>{item.quantity} items &#8226; $38.45</Text>
//                   <Text>2 days ago &#8226; {item.status}</Text>
//             </>
//           )}
//         />
//       </View>
//     </>
//   )
// }

// export default OrderScreen

// const styles = StyleSheet.create({
//   image: {
//     width: 150, 
//     height: 100, 
//     marginRight: 10
//   },
//   flavor: {
//     fontWeight: "600", 
//     fontSize: 16,
//   },
//   total: {
//     marginVertical: 5, 
//     fontWeight: "600", 
//     fontSize: 16
//   }
// })






function OrderScreen({ userId }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const orders = await DataStore.query(Order, o => o.userID('eq', userId));
      setOrders(orders);
    }
    fetchOrders();
  }, [userId]);

  return (
    <View>
      <Text>Orders</Text>
      <ScrollView>
        {orders.map(order => (
          <View key={order.id}>
            <Text>Order #{order.id} - Total: {order.total} - Status: {order.status}</Text>
            <ScrollView>
              {order.Donuts.map(donut => (
                <Text key={donut.id}>{donut.flavor} - {donut.price}</Text>
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}


export default OrderScreen