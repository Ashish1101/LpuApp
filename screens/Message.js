import React from 'react'
import {View , Text , ScrollView } from 'react-native'
import MessageCard from '../components/MessageCard'
import * as Animatable from 'react-native-animatable';

const Message = () => {
    const message1 = "The most common way to interact with a header is by tapping on a button either to the left or the right of the title. Let's add a button to the right side of the header (one of the most difficult places to touch on your entire screen, depending on finger and phone size, but also a normal place to put buttons)."
    return (
        <Animatable.View animation="fadeInUp" direction="alternate" useNativeDriver  >
            <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
            <MessageCard
           type="Announcement"
           message={message1}
           name="Ashish Shakya" 
           date="Oct 08, 2020"
           />
           <MessageCard
           type="Announcement"
           message={message1}
           name="Ashish Shakya" 
           date="Oct 08, 2020"
           />
            <MessageCard
           type="Announcement"
           message={message1}
           name="Ashish Shakya" 
           date="Oct 08, 2020"
           />
            <MessageCard
           type="Announcement"
           message={message1}
           name="Ashish Shakya" 
           date="Oct 08, 2020"
           />
            <MessageCard
           type="Announcement"
           message={message1}
           name="Ashish Shakya" 
           date="Oct 08, 2020"
           />
            </ScrollView>
        </Animatable.View>
    )
}

export default Message
