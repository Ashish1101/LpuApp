import React from 'react'
import {View , Text}  from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {StackNavigator , RmsNavigator , QuizNavigator} from './StackNavigator'
import {StatusBar} from 'expo-status-bar'

//Icons
import { AntDesign } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
      <>
      <StatusBar networkActivityIndicatorVisible animated backgroundColor="white" style="dark" />
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={StackNavigator} options={{drawerIcon: () => (<AntDesign name="home" size={26} color="black" />)}} />
            <Drawer.Screen name="RMS" component={RmsNavigator} />
            <Drawer.Screen name="Quiz" component={QuizNavigator} />
        </Drawer.Navigator>
      </>
    )
}

export default DrawerNavigator
