import {RouteProp, useNavigation, useRoute} from '@react-navigation/native'
import React, {useCallback, useEffect, useState} from 'react'
import {FlatList, StyleSheet, Text, View} from 'react-native'
import {RootStackParams} from '../navigator/StackNavigator'
import WordColumnComponent from '../components/WordColumnComponent';
import { WordBook } from '../interfaces/BookWord.interface';
import { getWordsByBookId, saveNewWord } from '../api/WordApi';
import { FloatingButtonComponent } from '../components/shared/touchableComponents/FloatingButtonComponent';
import { ActionSheetComponent } from '../components/ActionSheetComponent';
import { useToast } from '@gluestack-ui/themed';
import { ToastAlertComponent } from '../components/shared/alertsComponent/ToastAlertComponent';
import { ToastAlertPropsInterface } from '../interfaces/AlertProps';

export const BookWordScreen = () => {
  const [openAction, setOpenAction] = useState<boolean>(false)
  const params = useRoute<RouteProp<RootStackParams, 'Book'>>().params
  const [word, setWord] = useState<WordBook[]>([]);
  const [reloadList, setReloadList] = useState<boolean>();
  const toast = useToast();
  const navigation = useNavigation();

  useEffect(() => {
    getWords(params.bookId)
    navigation.setOptions({
      title: params.title
    })
  }, [reloadList])

  const showAlert = (alertProps: ToastAlertPropsInterface) => {
    const {action,variant,toastDescription,toastTitle} = alertProps
    toast.show({
      placement: 'top',
      render: ({id}) => {
        return(
          <ToastAlertComponent 
            nativeId={id}
            action={action}
            variant={variant}
            toastTitle={toastTitle}
            toastDescription={toastDescription}
          />
        )
      }
    })
  }

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

  const handleFormSubmit = async(word: string) => {
    try {
      const res = await saveNewWord({book_id:params.bookId,word});

      if(!res){
        showAlert({
          action: 'error',
          variant: 'accent',
          toastTitle: "Ups we couldn't save your word",
          toastDescription: "Something went wrong trying to save the word"
        });
        return
      }
      
      setReloadList(res);
      setOpenAction(false);
      showAlert({
        action: 'success',
        variant: 'accent',
        toastTitle: "Success",
        toastDescription: "The word was storage successfully"
      });
    } catch (error) {
      console.log(error)
    }
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
        handleClose={() => setOpenAction(false)} 
        handlerSubmit={(value) => handleFormSubmit(value)}  
      />
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
