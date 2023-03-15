import { useState } from 'react';
import { Image, View, Text } from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector';
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
     <View style={styles.root}>
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: product.image}} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {donut.flavor}
          </Text>
          {/* Ratings */}
          <View style={styles.ratingsContainer}>
            {[0, 0, 0, 0, 0].map((el, i) => (
              <FontAwesome
                key={`${donut.id}-${i}`}
                style={styles.star}
                name={i < Math.floor(product.avgRating) ? 'star' : 'star-o'}
                size={18}
                color={'#e47911'}
              />
            ))}
            <Text>{donut.ratings}</Text>
          </View>
          <Text style={styles.price}>
            from ${donut.price}
            {donut.oldPrice && (
              <Text style={styles.oldPrice}> ${donut.oldPrice}</Text>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector
          quantity={cartDonut.quantity}
          setQuantity={updateQuantity}
        />
      </View>
    </View>
    </>
  )
}

export default CartDonutItem

const styles = StyleSheet.create({

})







