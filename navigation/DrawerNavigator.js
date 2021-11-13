import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BottomTab from './BottomTabNavigator';
import ProfileScreen from '../screens/Profile';

import {createDrawerNavigator} from "@react-navigation/drawer"

const Drawer  = createDrawerNavigator()

export default class DrawerNavigator extends React.Component{
render() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name={"Home"} component={BottomTab}/>
        <Drawer.Screen name={"Profile"} component={ProfileScreen}/>
    </Drawer.Navigator>
  );
}
}