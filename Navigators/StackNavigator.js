import React from 'react'
import {View , Text , Button} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'expo-status-bar'
//Screens
import Home from '../screens/Home'
import Quiz from '../screens/Quiz'
import Profile from '../screens/Profile'
import Rms from '../screens/Rms'
import Message from '../screens/Message'
import MessageHistory from '../screens/MessageHistory'

//Icons
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { TouchableOpacity } from 'react-native-gesture-handler';

//other imports
import MessageBadge from '../components/MessageBadge'

const Stack = createStackNavigator();

const StackNavigator = ({navigation}) => {
    
    return (
     <>
        <StatusBar networkActivityIndicatorVisible animated backgroundColor="white" style="dark" />
     <Stack.Navigator screenOptions={{headerTitleAlign:'center'}}>
            <Stack.Screen name="Home" component={Home} 
             options={{headerRight: () => <TouchableOpacity style={{marginRight:8}} onPress={() => navigation.navigate('Message')}>
               <AntDesign name="message1" size={26} color="black" />
               </TouchableOpacity>,
                headerLeft: () => (
                <TouchableOpacity style={{marginLeft:20}} onPress={() => navigation.toggleDrawer()}>
                <Feather name="menu" size={26} color="black" />
              </TouchableOpacity>
             )}} />
            <Stack.Screen name="Rms" component={Rms}  />
            <Stack.Screen name="Quiz" component={Quiz}  />
            <Stack.Screen name="Profile" component={Profile}  />
            <Stack.Screen name="MessageHistory" component={MessageHistory} options={{
                headerRight : () => (<MessageBadge number={100}/>)
            }}  />
            <Stack.Screen name="Message" component={Message} 
            options={{headerRight: () => <TouchableOpacity style={{marginRight:8}} onPress={() => navigation.navigate('MessageHistory')}>
            <AntDesign name="link" size={26} color="black" />
            </TouchableOpacity> }} />
        </Stack.Navigator>
     </>
    )
}

// Screen for for Drawer Navigation

const RmsNavigator = ({navigation}) => {
    return (
    <Stack.Navigator screenOptions={{headerTitleAlign:'center' , headerLeft: () => (
        <TouchableOpacity style={{marginLeft:20}} onPress={() => navigation.toggleDrawer()}>
          <Feather name="menu" size={26} color="black" />
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
          <Feather name="menu" size={26} color="black" />
        </TouchableOpacity>
   )}} >
            <Stack.Screen name="Quiz" component={Quiz}  />
        </Stack.Navigator>
    )
}

// const AboutNavigator = ({navigation}) => {
//     return (
//     <Stack.Navigator screenOptions={{headerTitleAlign:'center' , headerLeft: () => (
//         <TouchableOpacity style={{marginLeft:20}} onPress={() => navigation.toggleDrawer()}>
//           <Feather name="menu" size={24} color="black" />
//         </TouchableOpacity>
//    )}} >
//             <Stack.Screen name="About" component={About}  />
//         </Stack.Navigator>
//     )
// }


{/*screenOptions={{headerTitleAlign:'center'}}*/}

export {StackNavigator , RmsNavigator , QuizNavigator}