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
        backgroundColor:'#ff547c',
        marginRight:5,
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:50
    },
    text:{
        fontWeight:'bold'
    }
})

export default MessageBadge
