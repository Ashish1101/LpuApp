import React from 'react'
import {Text, View,  ScrollView} from 'react-native'
import Cardlist from '../components/Cardlist'
import * as Animatable from 'react-native-animatable';
const Attandance = () => {
    return (
        <Animatable.View animation="flipInY"  easing="ease-out" useNativeDriver direction="alternate"  style={{marginTop:50}}>
               <ScrollView  horizontal scrollEventThrottle={16} showsHorizontalScrollIndicator={false}>
                  <Cardlist />
                  <Cardlist />
               </ScrollView>
        </Animatable.View>
    )
}

export default Attandance
