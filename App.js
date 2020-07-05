import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './src/app';

import {dynamicSize, getFontSize} from './src/utils/responsive';
console.disableYellowBox = true;
const bottomTab = createBottomTabNavigator(
  {
    Screen1: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor, focused }) => (
          <View>
            <Image
              style={{
                height:dynamicSize(25),
                width:dynamicSize(25),
                alignSelf: 'center',
                tintColor: '#000',
                opacity:focused ? 0.7 : 0.4
              }}
              source={require('./src/assets/compass.png')}
            />
          </View>
        ),
      }),
    },
    Screen2: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor, focused }) => (
          <View>
            <Image
              style={{
                height:dynamicSize(25),
                width:dynamicSize(25),
                alignSelf: 'center',
                tintColor: '#000',
                opacity:focused ? 1 : 0.4
              }}
              source={require('./src/assets/search.png')}
            />
          </View>
        ),
      }),
    },
    Screen3: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor, focused }) => (
          <View>
            <Image
              style={{
                height:dynamicSize(25),
                width:dynamicSize(25),
                alignSelf: 'center',
                tintColor: '#000',
                opacity:focused ? 1 : 0.4
              }}
              source={require('./src/assets/email.png')}
            />
          </View>
        ),
      }),
    },
    Screen4: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor, focused }) => (
          <View>
            <Image
              style={{
                height:dynamicSize(25),
                width:dynamicSize(25),
                alignSelf: 'center',
                tintColor: '#000',
                opacity:focused ? 1 : 0.4
              }}
              source={require('./src/assets/user.png')}
            />
          </View>
        ),
      }),
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#FFFFFF",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity:10,
        shadowRadius: 100,
        elevation: 10,
      },
    },
  },
);

const AppContainer = createAppContainer(
  createStackNavigator(
      {
        Home:{
          screen:bottomTab,
          navigationOptions:{
            headerShown: false,
          },
        }
      },
      { initialRouteName: 'Home' }
  ),
);

export default AppContainer;