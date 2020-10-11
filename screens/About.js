import React from 'react'
import {Button, Text , View} from 'react-native'

const About = ({navigation}) => {
    return (
        <View>
              <Button title="About" onPress={() => navigation.navigate('About')}/>
            <Text>Inside About</Text>
          
        </View>
    )
}

export default About