import React, {useEffect, useState} from 'react'
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
import SimpleCardComponent from '../components/SimpleCardComponent'
import {type NavigationProp, useNavigation} from '@react-navigation/native'
import {type RootStackParams} from '../navigator/StackNavigator'
import {getBooks} from '../api/BooksApi'
import {Books} from '../interfaces/Books.interface'

export const HomeScreen = () => {
  const [books, setBooks] = useState<Books[]>([])
  const navigation = useNavigation<NavigationProp<RootStackParams>>()

  useEffect(() => {
    getBooksCall()
  }, [])

  const getBooksCall = async () => {
    try {
      console.log('START CALLING')
      const data = await getBooks()
      if (data) {
        setBooks(data)
      }
    } catch (error) {
      console.log("ERROR")
      console.log(error)
    }
  }
  return (
    <ScrollView 
      style={styles.homeContent}
      contentContainerStyle={styles.contentStyles}  
    >
      {
        books.map((item,index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate('Book', {
                ...item
              })
            }
          >
          <SimpleCardComponent title={item.book_name} />
          </TouchableOpacity>
        ))
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  homeContent: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 1,
  },

  contentStyles: {
    flexDirection: 'row',
    justifyContent:'space-between',
  }
})
