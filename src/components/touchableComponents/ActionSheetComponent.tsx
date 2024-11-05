import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { 
  Actionsheet, 
  ActionsheetBackdrop, 
  ActionsheetContent, 
  ActionsheetDragIndicator, 
  ActionsheetDragIndicatorWrapper,
  FormControl,
  FormControlHelper,
  FormControlHelperText,
  Input,
  InputField,
  Button,
  ButtonText,
  Center
} from '@gluestack-ui/themed';
import { Formik } from 'formik';
import schema from '../../shared/addWordSchema';

interface Props{
  isOpen: boolean,
  handleClose(): void,
  handlerSubmit(word:string): void
}
export const ActionSheetComponent = ({isOpen,handleClose,handlerSubmit}: Props) => {

  return (
    <Actionsheet isOpen={isOpen} onClose={handleClose}>
      <ActionsheetBackdrop />
      <ActionsheetContent maxHeight="30%" minHeight="30%">
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <View style={styles.viewContent}>
          <Text style={styles.sheetTitle}>Word</Text>
          
          <Formik
            initialValues={{word: ''}}
            onSubmit={(value) => handlerSubmit(value.word)}
            validationSchema={schema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              isValid,
              dirty,
              values
            }) =>(
              <View>
                <FormControl minWidth="$80">
                  <Input 
                    borderRadius="$2xl"
                    borderColor="#303030">
                    <InputField 
                      onChangeText={handleChange('word')} 
                      onBlur={handleBlur('word')}
                      value={values.word} />
                  </Input>
                  <FormControlHelper>
                    <FormControlHelperText>
                      Please insert a word to translate it
                    </FormControlHelperText>
                  </FormControlHelper>
                </FormControl>
                <Center style={{marginVertical: 15}}>
                  <Button
                    size="lg"
                    variant="solid"
                    action="primary"
                    width="$1/2"
                    borderRadius="$2xl"
                    backgroundColor="#2599FB"
                    disabled={!(isValid && dirty)}
                    onPress={() => handleSubmit()}
                  >
                    <ButtonText color="#303030">Save</ButtonText>
                  </Button>
                </Center>
              </View>
            )}

          </Formik>
        </View>
      </ActionsheetContent>
    </Actionsheet>
  )
}

const styles = StyleSheet.create({
  viewContent:{
    width: '100%',
    height: '100%',
    paddingVertical: 10,
    flexDirection: 'column',
    alignItems: 'center'
  },
  sheetTitle:{
    fontSize: 25,
    color: '#303030',
    fontWeight: 'bold'
  }
})