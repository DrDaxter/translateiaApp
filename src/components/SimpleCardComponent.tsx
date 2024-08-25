import React, {memo} from 'react'
import {Card, Heading, Text} from '@gluestack-ui/themed'
import { StyleSheet, View } from 'react-native'
import LottieView from 'lottie-react-native';

interface Props {
  title: string
}

const SimpleCardComponent = ({title}: Props) => {
  return (
    <View style={styles.cardContent}>
      <Card size="md" variant="elevated" style={styles.card}>
        <LottieView source={require('../assets/images/lottie_book.json')}
          style={styles.imageLt} autoPlay loop />
      </Card>
      <Text size="sm" style={styles.titleT}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContent:{
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 200,
  },
  card:{
    width: 120,
    height: 150,
    backgroundColor: "#f6d7e7"
  },
  imageLt:{
    width:"100%",
    height: "100%"
  },
  titleT:{
    fontWeight: "bold",
    color: "#000",
    marginVertical: 5
  }
})

export default memo(SimpleCardComponent)
