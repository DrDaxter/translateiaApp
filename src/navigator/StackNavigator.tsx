import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import {HomeScreen} from '../screens/HomeScreen'
import {BookWordScreen} from '../screens/BookWordScreen'
import { Books } from '../interfaces/Books.interface'
import { DrawerNavigator } from './DrawerNavigator'
import { BookPageProps } from '../interfaces/WordPagePropsInterface'

export type RootStackParams = {
  Drawer: undefined
  Book: BookPageProps
}
const Stack = createStackNavigator<RootStackParams>()

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      id="mainNavigator"
      initialRouteName="Drawer"
      screenOptions={{
        headerTintColor: "#2599fb",
        headerTitleAlign: "center",
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          backgroundColor: '#ffffff',
        }
      }}>
      <Stack.Screen
        options={{
          headerShown: false
        }} 
        name="Drawer" 
        component={DrawerNavigator} />
      <Stack.Screen name="Book" component={BookWordScreen} />
    </Stack.Navigator>
  )
}
