import {RouteProp, useNavigation, useRoute} from '@react-navigation/native'
import React, {useEffect} from 'react'
import {FlatList, StyleSheet, Text, View} from 'react-native'
import {RootStackParams} from '../navigator/StackNavigator'

export const BookWordScreen = () => {
  const params = useRoute<RouteProp<RootStackParams, 'Book'>>().params
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      title: params.book_name
    })
  }, [])

  const WordItem = () => {
    return (
      <View>
        
      </View>
    )
  }

  return (
    <View style={styles.bookContent}>
      {/* <FlatList 

      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  bookContent: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})
