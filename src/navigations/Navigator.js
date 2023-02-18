import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack' 
import Home from '../screens/Home'
import Datail from '../screens/Datail'
import Favourite from '../screens/Favourite'
import Profile from '../screens/Profile'
import { Image } from 'react-native';

const Tab = createBottomTabNavigator()
const BottomTabNavigator = () => {
   return (
      <Tab.Navigator
         initialRouteName="home"
         screenOptions={{
            headerShown: false,
            tabBarStyle:{
               height: 55,
               justifyContent: 'center',
               paddingVertical: 15,
               backgroundColor: '#e3ece5',
               elevation: 2
            }
         }}
      >
         <Tab.Screen 
            name="home" 
            component={Home}
            options={{
               tabBarLabel: '',
               tabBarIcon: ({color, size}) => (
                  <Image
                     source={require('../images/8.png')}
                     style={{height: 20, width: 20}}
                  />
               )
            }}
         />

         <Tab.Screen 
            name="favourite" 
            component={Favourite}
            options={{
               tabBarLabel: '',
               tabBarIcon: ({color, size}) => (
                  <Image
                     source={require('../images/9.png')}
                     style={{height: 20, width: 20}}
                  />
               )
            }}
         />

         <Tab.Screen 
            name="profile" 
            component={Profile}
            options={{
               tabBarLabel: '',
               tabBarIcon: ({color, size}) => (
                  <Image
                     source={require('../images/10.png')}
                     style={{height: 20, width: 20}}
                  />
               )
            }}
         />

      </Tab.Navigator>
   )
}

const Stack = createStackNavigator()

const HomeStackNavigator = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            headerShown: false
         }
      }>
         <Stack.Screen
            name='main' 
            component={BottomTabNavigator}
         />
         <Stack.Screen name='datail' component={Datail}/>
      </Stack.Navigator>
   )
}

export default HomeStackNavigator;