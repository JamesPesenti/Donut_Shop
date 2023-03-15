import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import DonutItem from "../components/DonutItem"
import { DataStore } from "@aws-amplify/datastore"
import { Donut } from "../src/models"


const MenuScreen = () => {
  const [donuts, setDonuts] = useState([])

  useEffect(() => {
    DataStore.query(Donut).then(setDonuts)
  })
  

  return (
    <View style={{marginTop: 30}}>
      <FlatList 
        data={donuts}
        renderItem={({item}) => <DonutItem donut={item} />}
      />
    </View>
  )
}

export default MenuScreen

const styles = StyleSheet.create({})