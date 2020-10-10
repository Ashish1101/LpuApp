import React from 'react'
import {View , Text , StyleSheet} from 'react-native'
const Card = ({title , number}) => {
    return (
        <View style={style.container}>
            <Text>{title}</Text>
            <Text>{number}</Text>
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
        elevation: 5
    }
})

export default Card
