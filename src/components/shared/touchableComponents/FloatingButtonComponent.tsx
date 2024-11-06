import React from 'react'
import { StyleSheet, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'

interface Prop{
    onClick(): void
}

export const FloatingButtonComponent = ({onClick}:Prop) => {
    const windowHeight = useWindowDimensions().height;
  return (
    <TouchableOpacity style={[
        styles.touchable, 
        {top: windowHeight - 200}
        ]}
        onPress={onClick}>
        <View style={styles.btnView}>
            <Icon name="add" color="#ffffff" size={40}/>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    touchable:{
        position: 'absolute',
        right: 40,
    },
    btnView:{
        height: 60,
        width: 60,
        borderRadius: 100,
        backgroundColor: '#2599FB',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});