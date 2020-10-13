import React from 'react'
import {View , StyleSheet}  from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {StackNavigator , RmsNavigator , QuizNavigator} from './StackNavigator'
import {StatusBar} from 'expo-status-bar'

//Icons
import { AntDesign } from '@expo/vector-icons';

import {
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const NativeDrawer = createDrawerNavigator();

function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={
          styles.drawerContent
        }
      >
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri:
                'https://instagram.fdel25-1.fna.fbcdn.net/v/t51.2885-19/s320x320/119190021_1455153064686875_6596187654548491253_n.jpg?_nc_ht=instagram.fdel25-1.fna.fbcdn.net&_nc_ohc=Q9tzVTXZqV4AX-1ux5n&oh=574af635e004204cd6769baa7511bd85&oe=5FAEF81A',
            }}
            size={50}
          />
          <Title style={styles.title}>Ashish</Title>
          <Caption style={styles.caption}>11815163</Caption>
          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                6.6
              </Paragraph>
              <Caption style={styles.caption}>CGPA</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                159
              </Paragraph>
              <Caption style={styles.caption}>Followers</Caption>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            )}
            label="Home"
            onPress={() => props.navigation.navigate('Home')}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="account-circle" color={color} size={size} />
            )}
            label="Account"
            onPress={() => props.navigation.navigate('RMS')}
          />
          <DrawerItem
           
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="bookmark-outline"
                color={color}
                size={size}
              />
            )}
            label="Fees"
            onPress={() => props.navigation.navigate('Quiz')}
          />
        </Drawer.Section>
        <Drawer.Section title="Preferences">
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={false} />
              </View>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>RTL</Text>
              <View pointerEvents="none">
                <Switch value={false} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
 
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
  
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});


//screen which we have to use in drawer navigation should be inside Drawer..Navigator

const DrawerNavigator = () => {
    return (
      <>
      <StatusBar networkActivityIndicatorVisible animated backgroundColor="#e0b03f" style="dark" />
        <NativeDrawer.Navigator  initialRouteName="Home"  drawerContent={(props) => <DrawerContent {...props}/>}>
            <NativeDrawer.Screen name="Home" component={StackNavigator} options={{drawerIcon: () => (<AntDesign name="home" size={26} color="black" />)}} />
            <NativeDrawer.Screen  name="RMS" component={RmsNavigator} />
            <NativeDrawer.Screen name="Quiz" component={QuizNavigator} />
        </NativeDrawer.Navigator>
      </>
    )
}

export default DrawerNavigator
