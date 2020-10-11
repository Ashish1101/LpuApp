import React from 'react'
import {View , Text , Button} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';


import Home from '../screens/Home'
import About from '../screens/About'
import Quiz from '../screens/Quiz'
import Profile from '../screens/Profile'
import Rms from '../screens/Rms'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const StackNavigator = ({navigation}) => {
    
    return (
    <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} 
             options={{headerRight: () => <TouchableOpacity style={{marginRight:8}} onPress={() => console.log('message opened')}>
               <AntDesign name="message1" size={24} color="black" />
               </TouchableOpacity>,
                headerLeft: () => (
                <TouchableOpacity style={{marginLeft:20}} onPress={() => navigation.toggleDrawer()}>
                <Feather name="menu" size={24} color="black" />
              </TouchableOpacity>
             )}} />
            <Stack.Screen name="Rms" component={Rms}  />
            <Stack.Screen name="Quiz" component={Quiz}  />
            <Stack.Screen name="Profile" component={Profile}  />
        </Stack.Navigator>
    )
}

const RmsNavigator = ({navigation}) => {
    return (
    <Stack.Navigator screenOptions={{headerTitleAlign:'center' , headerLeft: () => (
        <TouchableOpacity style={{marginLeft:20}} onPress={() => navigation.toggleDrawer()}>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
   )}}  >
            <Stack.Screen name="RMS" component={Rms}  />
        </Stack.Navigator>
    )
}

const QuizNavigator = ({navigation}) => {
    return (
    <Stack.Navigator screenOptions={{headerTitleAlign:'center' , headerLeft: () => (
        <TouchableOpacity style={{marginLeft:20}} onPress={() => navigation.toggleDrawer()}>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
   )}} >
            <Stack.Screen name="Quiz" component={Quiz}  />
        </Stack.Navigator>
    )
}

{/*screenOptions={{headerTitleAlign:'center'}}*/}

export {StackNavigator , RmsNavigator , QuizNavigator}