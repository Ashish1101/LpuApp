import React from 'react'
import {View , Text , Button} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';


import Home from '../screens/Home'
import About from '../screens/About'
import Quiz from '../screens/Quiz'
import Profile from '../screens/Profile'
import Rms from '../screens/Rms'

const Stack = createStackNavigator();

const StackNavigator = () => {
    
    return (
    <Stack.Navigator >
            <Stack.Screen name="Home" component={Home} 
             options={{headerRight: () => <Button title="M" onPress={() => console.log('message')} />}} />
            <Stack.Screen name="Rms" component={Rms}  />
            <Stack.Screen name="Quiz" component={Quiz}  />
            <Stack.Screen name="Profile" component={Profile}  />
        </Stack.Navigator>
    )
}

{/*screenOptions={{headerTitleAlign:'center'}}*/}

export default StackNavigator