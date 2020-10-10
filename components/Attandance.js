import React from 'react'
import {Text, View,  ScrollView} from 'react-native'
import Cardlist from '../components/Cardlist'
const Attandance = () => {
    return (
        <View style={{marginTop:50}}>
               <ScrollView  horizontal scrollEventThrottle={16} showsHorizontalScrollIndicator={false}>
                  <Cardlist />
                  <Cardlist />
               </ScrollView>
        </View>
    )
}

export default Attandance
