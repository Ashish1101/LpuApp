import React from 'react'
import {Text , View , ScrollView} from 'react-native'
import TimeTableCard from '../components/TimeTableCard'
const TimeTableSlider = () => {
    return (
        <View style={{borderBottomColor:'#d9dade' , borderBottomWidth:1.5 , height:120}}>
            <ScrollView horizontal 
            showsHorizontalScrollIndicator={false} 
            scrollEventThrottle={16}>
              <TimeTableCard 
              time="9-10 AM" 
              subject="INT219" 
              room="34-503"
              status="present" />
              <TimeTableCard 
              time="10-11 AM" 
              subject="CSE332" 
              room="36-803"
              status="absent" />
               <TimeTableCard 
              time="10-11 AM" 
              subject="CSE332" 
              room="36-803"
              status="absent" />
               <TimeTableCard 
              time="10-11 AM" 
              subject="CSE332" 
              room="36-803"
              status="absent" />
            </ScrollView>
        </View>
    )
}

export default TimeTableSlider
