import React, { useState } from 'react'
import { View , Text , TextInput , StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
const MessageSearch = () => {
    const [text , setText]  = useState('')
    return (
        <View style={style.container}>
            <AntDesign name="search1" size={24} color="black" style={style.icon} />
            <TextInput
            placeholder="Search..."
            value={text} 
            onChangeText={(val) => {
                console.log(text)
                setText(val)
            }}
             />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        elevation:5,
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        borderBottomWidth:0.5,
        borderBottomColor:'gray'
    },
    textInput: {
        height:50,
        borderColor:'gray',
        elevation:3,
    },
    icon: {
        paddingHorizontal:5,
        marginLeft:5
    }
})



export default MessageSearch
