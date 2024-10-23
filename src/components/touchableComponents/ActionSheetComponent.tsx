import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper } from '@gluestack-ui/themed';

interface Props{
  isOpen: boolean,
  handleClose(): void
}
export const ActionSheetComponent = ({isOpen,handleClose}: Props) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={handleClose}>
      <ActionsheetBackdrop />
      <ActionsheetContent maxHeight="30%" minHeight="30%">
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <View style={styles.viewContent}>
          <Text style={styles.sheetTitle}>Word</Text>
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