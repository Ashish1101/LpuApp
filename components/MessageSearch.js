import React, { useState } from 'react'
import { View , Text , TextInput , StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
const MessageSearch = () => {
    const [text , setText]  = useState('')
    return (
        <View style={style.container}>
            <AntDesign name="search1" size={24} color="black" style={style.icon} />
            <TextInput
            style={style.textInput}
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
        borderBottomColor:'gray',
      
        justifyContent:'flex-start'
    },
    textInput: {
        
        borderColor:'gray',
        flex:1,
        paddingVertical:8,
        paddingHorizontal:10
    },
    icon: {
        paddingHorizontal:6,
        marginLeft:6,
    }
})



export default MessageSearch
