import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon  from 'react-native-vector-icons/Ionicons'

interface Props{
    word: string,
    preview: string,
    arrowClick():void
}

const WordColumnComponent = ({word,preview,arrowClick}:Props) => {
  return (
    <View style={styles.colContent}>
        <View style={styles.preViewContent}>
            <Text style={styles.word}>{word}</Text>
            <Text style={styles.meaningPreview} numberOfLines={1}>{preview}</Text>
        </View>
        <View style={styles.arrowContent}>
            <TouchableOpacity
                onPress={() => arrowClick()}
            >
                <Icon name='arrow-forward' 
                    size={35}
                    color="#303030"/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    colContent:{
        width: '100%',
        height: 70,
        borderRadius: 5,
        marginVertical: 10,
        flexDirection: 'row',
        backgroundColor: "#f6d7e7"
    },
    preViewContent:{
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        paddingHorizontal: 10,
        
    },
    arrowContent:{
        width:'20%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    word:{
        fontSize: 19,
        fontWeight: 'bold',
        color: '#303030'
    },
    meaningPreview:{
        fontSize: 15,
        fontWeight: '400',
        color: '#303030',
        paddingStart: 5
    }
})

export default memo(WordColumnComponent);