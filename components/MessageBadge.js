import React from 'react'
import {View , Text , StyleSheet} from 'react-native'

const MessageBadge = ({number}) => {
    return (
        <View style={style.container}>
        <Text style={style.text}>{number}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor:'#ffd269',
        marginRight:5,
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:50,
        borderColor:'gray',
        borderWidth:2
    },
    text:{
        fontWeight:'bold'
    }
})

export default MessageBadge
