import React from 'react'
import {View , Text} from 'react-native'
import MessageSearch from '../components/MessageSearch'
import Message from './Message'
const MessageHistory = ({navigation}) => {
    return (
        <View style={{flex:1}}>
            <View style={{flex:1}}>
            <MessageSearch  />
            </View>
            <View style={{flex:11}}>
            <Message  />
            </View>
        </View>
    )
}

export default MessageHistory
