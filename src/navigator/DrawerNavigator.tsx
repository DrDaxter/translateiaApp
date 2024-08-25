import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/HomeScreen';

export type RootStackParams = {
    Home: undefined
}

const Drawer = createDrawerNavigator<RootStackParams>();

export const DrawerNavigator = () => {
    return(
        <Drawer.Navigator
            id="drawerNavigator"
            initialRouteName="Home"
            screenOptions={{
                headerTintColor: "#2599fb",
                headerTitleStyle:{
                    color: "#2599fb"
                }
            }}
        >
            <Drawer.Screen
                options={{
                    title: "Home",
                    headerTitleAlign: "center",
                }}
                name="Home" 
                component={HomeScreen} />
        </Drawer.Navigator>
    )
}