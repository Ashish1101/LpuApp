import React from 'react'
import {Text, View , StyleSheet} from 'react-native'
import Card from '../components/Card'


const Cardlist = () => {
    return (
        <View style={style.container}>
            <View style={style.secondaryContainer}>
                <Card title="Attandeance" number="97%" name="person-outline" />
                <Card title="Exams" number="6" name="assignment-turned-in" />
            </View>
            <View style={style.secondaryContainer}>
                <Card title="Announcements" number="2" name="local-library" />
                <Card title="Assignments" number="4" name="poll" />
            </View>
            <View style={style.secondaryContainer}>
                <Card title="Result" number="97%" name="today" />
                <Card title="Marks" number="6" name="filter-9-plus" />
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
