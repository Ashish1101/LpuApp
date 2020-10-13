import React from 'react'
import {Text , View , TouchableOpacity , StyleSheet , ScrollView} from 'react-native'
import { linear } from 'react-native/Libraries/Animated/src/Easing'
import Attandance from '../components/Attandance'
import TimeTableSlider from '../components/TimeTableSlider'
import * as Animatable from 'react-native-animatable';

const Home = ({navigation}) => {
    return (
        <View style={style.container}>
            <View>
                <Animatable.Text animation="fadeIn" direction="alternate" useNativeDriver style={{marginLeft:10 , marginVertical:10}}>Today's Timetable</Animatable.Text>
            <TimeTableSlider  />
            </View>
            <Attandance />
           <View style={style.btnContainer}>
            <TouchableOpacity style={style.btn} onPress={() => navigation.navigate('Home')}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btn} onPress={() => navigation.navigate('Rms')}>
                <Text>RMS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btn}  onPress={() => navigation.navigate('Quiz')}>
                <Text>Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btn} onPress={() => navigation.navigate('Profile')}>
                <Text>Profile</Text>
            </TouchableOpacity>
          </View> 
        </View>
    )
}

const style = StyleSheet.create({
    container : {
        flex:1,
        
    },
    btnContainer: {
     alignItems:'flex-end',
     flex:1,
     flexDirection:'row',
  
    },
    btn: {
        flex:1,
        paddingHorizontal:25,
        paddingVertical:15,
        backgroundColor: '#d99b09'
    }
    
})

{/* <View style={style.btnContainer}>
<TouchableOpacity style={style.btn} onPress={() => navigation.navigate('Home')}>
    <Text>Home</Text>
</TouchableOpacity>
<TouchableOpacity style={style.btn} onPress={() => navigation.navigate('Rms')}>
    <Text>RMS</Text>
</TouchableOpacity>
<TouchableOpacity style={style.btn}  onPress={() => navigation.navigate('Quiz')}>
    <Text>Quiz</Text>
</TouchableOpacity>
<TouchableOpacity style={style.btn} onPress={() => navigation.navigate('Profile')}>
    <Text>Profile</Text>
</TouchableOpacity>
</View> */}

export default Home
