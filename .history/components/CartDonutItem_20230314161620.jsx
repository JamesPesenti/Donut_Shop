import { useState } from 'react';
import { Image, View, Text } from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantityButtons from './QuantityButtons';
import { DataStore } from 'aws-amplify';

import { CartDonut } from '../src/models';

const CartDonutItem = ({ cartItem }) => {

    // console.log(cartItem);
    const {donut, ...cartDonut} = cartItem;
  
    const updateQuantity = async () => {
      const original = await DataStore.query(CartDonut, cartDonut.id);
  
      await DataStore.save(
        CartDonut.copyOf(original, updated => {
          updated.quantity = newQuantity;
        }),
      );
    };


  return (
    <>
     <View >
      <View >
        <Image style={{width: 100, height: 100}} source={{uri: product.image}} />
        <View >
          <Text  numberOfLines={3}>
            {donut.flavor}
          </Text>
          {/* Ratings */}
          <View >
            {[0, 0, 0, 0, 0].map((el, i) => (
              <FontAwesome
                key={`${donut.id}-${i}`}
              
                name={i < Math.floor(product.avgRating) ? 'star' : 'star-o'}
                size={18}
                color={'#e47911'}
              />
            ))}
            <Text>{donut.ratings}</Text>
          </View>
          <Text >
            from ${donut.price}
            {donut.oldPrice && (
              <Text > ${donut.oldPrice}</Text>
            )}
          </Text>
        </View>
      </View>
      <View >
        <QuantityButtons
          quantity={cartDonut.quantity}
          setQuantity={updateQuantity}
        />
      </View>
    </View>
    </>
  )
}

export default CartDonutItem








