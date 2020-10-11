import React from 'react'
import {View , Text}  from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import About from '../screens/About'
import Home from '../screens/Home'
import {StackNavigator , RmsNavigator , QuizNavigator} from './StackNavigator'



const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={StackNavigator} />
             <Drawer.Screen name="RMS" component={RmsNavigator} />
             <Drawer.Screen name="Quiz" component={QuizNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
