import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import { DataStore } from "@aws-amplify/datastore"
import { Donut } from "../src/models"

useEffect(() => {
  DataStore.query(Donut).then(setDonuts)
})


const MenuScreen = () => {
  const [donuts, setDonuts] = useState([])


  return (
    <View>
      <FlatList 
        data={donuts}
        renderItem={({item}) => <DonutItem donut={item} />}
      />
    </View>
  )
}

export default MenuScreen

const styles = StyleSheet.create({})