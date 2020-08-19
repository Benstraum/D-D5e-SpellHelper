import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './components/Home/Home'
import { navigationRef } from './RootNavigation';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Feed () {
        return (
            <NavigationContainer ref={navigationRef}>
                <Drawer.Navigator initialRouteName={'Home'}>
                    <Drawer.Screen name="Home" component={Home} />
                </Drawer.Navigator>
            </NavigationContainer>
        )
}
export default connect()(Feed)
