import {RouteProp, useNavigation, useRoute} from '@react-navigation/native'
import React, {useEffect, useState} from 'react'
import {FlatList, StyleSheet, Text, View} from 'react-native'
import {RootStackParams} from '../navigator/StackNavigator'
import WordColumnComponent from '../components/WordColumnComponent';
import { WordBook } from '../interfaces/BookWord.interface';
import { getWordsByBookId } from '../api/WordApi';
import { FloatingButtonComponent } from '../components/touchableComponents/FloatingButtonComponent';
import { ActionSheetComponent } from '../components/touchableComponents/ActionSheetComponent';

export const BookWordScreen = () => {
  const [openAction, setOpenAction] = useState<boolean>(false)
  const params = useRoute<RouteProp<RootStackParams, 'Book'>>().params
  const [word, setWord] = useState<WordBook[]>([]);
  const navigation = useNavigation()

  useEffect(() => {
    getWords(params.bookId)
    navigation.setOptions({
      title: params.title
    })
  }, [params])

  const getWords = async (bookId: number) => {
    console.log('START CALLING WORD')
    try {
      const data = await getWordsByBookId(bookId)
      setWord(data)
    } catch (error) {
      console.log(error)
    }
  }

  const goToDefinition = () =>{
    console.log("going to definition")
    //navigation.navigate()
  }

  const handleSheetClose = () => {
    setOpenAction(false)
  }

  return (
    <View style={styles.bookContent}>
      <FlatList 
        data={word}
        renderItem={({item}) => (
          <WordColumnComponent
          word={item.word}
          preview={"No definition yet"}
          arrowClick={goToDefinition} 
          key={item.word_id}/>
        )}
        keyExtractor={(item) => item.word_id.toString()}
      />

      <FloatingButtonComponent 
        onClick={() => setOpenAction(true)}
      />

      <ActionSheetComponent 
        isOpen={openAction} 
        handleClose={handleSheetClose} />
    </View>
  )
}

const styles = StyleSheet.create({
  bookContent: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10
  }
})
