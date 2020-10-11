import React from 'react'
import {Text, View , StyleSheet} from 'react-native'
import Card from '../components/Card'

const Cardlist = () => {
    return (
        <View style={style.container}>
            <View style={style.secondaryContainer}>
                <Card title="attandeance" number="97%" />
                <Card title="Exams" number="6" />
            </View>
            <View style={style.secondaryContainer}>
                <Card title="attandeance" number="97%" />
                <Card title="Exams" number="6" />
            </View>
            <View style={style.secondaryContainer}>
                <Card title="attandeance" number="97%" />
                <Card title="Exams" number="6" />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
      
        flex:1,
        justifyContent:'center',
        // paddingVertical:180,
        paddingBottom:40,
        marginHorizontal:8
    },
    secondaryContainer: {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginVertical:5,
        
    }
})

export default Cardlist
