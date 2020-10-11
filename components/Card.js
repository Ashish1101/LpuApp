import React from 'react'
import {View , Text , StyleSheet} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
const Card = ({title , number , name}) => {
    return (
        <View style={style.container}>
             <View style={style.secContainer}>
              <MaterialIcons name={name} size={50} color="#333333" style={style.icon} />
              <Text style={style.text}>{title}</Text>
             </View>
             <View><Text>{number}</Text></View>
        </View>
    )
}

const style = StyleSheet.create({
    container : {
        width:180,
        height:100,
        marginHorizontal:5,
        backgroundColor:'teal',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
        flexDirection:'row',
        justifyContent:'flex-end',
    },

    secContainer: {
         marginRight:25 ,
         marginTop:5 , 
         alignSelf:'center'
    },
    icon: {
        paddingVertical:5,
        paddingHorizontal:25
    },
    text: {
         textAlign:'center'
    }
})

export default Card
