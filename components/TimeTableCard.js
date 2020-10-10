import React from 'react'
import {Text , View , StyleSheet} from 'react-native'
const TimeTableCard = ({time , subject , room , status}) => {
    return (
        <View style={style.container}>
           <Text style={style.header}>{time}</Text> 
           <View style={{marginTop:10}}>
            <Text style={style.text}>{subject}</Text>
               <Text style={style.text}>Room No :{room}</Text>
               <Text style={style.text}>{status}</Text>
           </View>
        </View>
    )
}

const style = StyleSheet.create({
 container: {
    width:150,
    height:100,
    marginHorizontal:10,
    backgroundColor:'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
}, 
   header: {
       backgroundColor:'teal',
       textAlign:'center'
   },
   text: {
       textAlign:'center',
       fontSize:13,
      
   }
})

export default TimeTableCard
