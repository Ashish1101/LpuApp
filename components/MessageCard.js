import React from 'react'
import {View , Text , StyleSheet} from 'react-native'

const MessageCard = ({type , message , name , date}) => {
    return (
        <View style={style.container}>
           <View style={style.secContainer}>
             <Text style={style.heading}>{type}</Text>
            <Text style={style.detail }>{message}</Text>
             <Text>{name} {date}</Text>
           </View>
        </View>
    )
}

const style = StyleSheet.create({
   container: {
       paddingHorizontal:8,
       paddingVertical:5,
       marginVertical:4,
       marginHorizontal:5,
       borderColor:'#d9dade',
       elevation:2.5
   },

   secContainer: {
      marginLeft:10
   },
   heading: {
       paddingVertical:3,
       marginVertical:6,
       fontSize:16
   },
   detail: {
       paddingBottom:10,
       borderBottomColor:'#d9dade' ,
       borderBottomWidth:2,
       fontSize:14
   }
})

export default MessageCard
