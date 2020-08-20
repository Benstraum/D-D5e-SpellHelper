import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigationRef } from './RootNavigation';
//components
import Filter from './components/Filter/Filter'
import Spells from './components/Spells/Spells.js'
import SelectedSpell from './components/SelectedSpell/SelectedSpell'
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Feed = (props) => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Tab.Navigator backBehavior={history} initialRouteName={'allSpells'} tabBarOptions={{ activeTintColor: '#e91e63', }}>
                <Tab.Screen name="allSpells"
                    component={Spells}
                />
                <Tab.Screen name="Filter"
                    component={Filter}
                />
                 <Tab.Screen name="selectedSpell"
                    component={SelectedSpell}
                />
                
            </Tab.Navigator>
        </NavigationContainer>
    )
}
const mapStateToProps = (state) => ({
    spell: state.selectedSpellReducer
});
export default connect(mapStateToProps)(Feed)
