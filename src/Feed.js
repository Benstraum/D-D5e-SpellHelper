import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { navigationRef } from './RootNavigation';
//components
import Home from './components/Home/Home'
import Spells from './components/Spells/Spells.js'


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Feed () {
        return (
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator initialRouteName={'Home'}>
                    <Stack.Screen name="Home" 
                    component={Home}  
                    options={{ title: 'SpellBook',headerTitleStyle: { textAlign:"center", flex:1 }, }} />
                    <Stack.Screen name="allSpells" 
                    component={Spells}  
                    options={{ title: 'All Spells',headerTitleStyle: {textAlign:"center", flex:1 }, }} />
                </Stack.Navigator>
            </NavigationContainer>
        )
}
export default connect()(Feed)
