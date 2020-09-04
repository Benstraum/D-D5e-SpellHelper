import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigationRef } from './RootNavigation';

import {Icon} from 'semantic-ui-react'
//components
import Filter from './components/Filter/Filter'
import Spells from './components/Spells/Spells.js'
import SelectedSpell from './components/SelectedSpell/SelectedSpell'
import FilteredSpellsPage from './components/FilteredSpellsPage/FilteredSpellsPage'
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Feed = (props) => {

    const createSpellStack = () => {
        return (
        <Stack.Navigator initialRoutename={'allSpells'} >
            <Stack.Screen options={{headerShown: false}} 
            name="allSpells" 
            component={Spells} 
            />
            <Stack.Screen 
            options={{
                headerStyle:{backgroundColor:'#21211f'},
                headerTintColor:'white'
            }} 
            name="Spell Details" 
            component={SelectedSpell} 
            />
        </Stack.Navigator>
        )
    }
    const createFilterStack = () =>{
        return (
            <Stack.Navigator initialRoutename={'Filter'} >
            <Stack.Screen options={{headerShown: false}} 
            name="Filter" 
            component={Filter} 
            />
            <Stack.Screen 
            options={{
                headerStyle:{backgroundColor:'#21211f'},
                headerTintColor:'white'
            }} 
            name="Filtered Spell List" 
            component={FilteredSpellsPage} 
            />
        </Stack.Navigator>
        )
    }
    return (
        <NavigationContainer ref={navigationRef}>
            <Tab.Navigator initialRouteName={'Spells'}
             swipeEnabled 
             tabBarOptions={{ 
                 activeTintColor: '#FF3838', 
                 inactiveTintColor: 'lightgray',
             inactiveBackgroundColor:'#21211f', 
             activeBackgroundColor:'#21211f', 
             allowFontScaling:true,
             keyboardHidesTabBar:true,
             animationEnabled: true,
             labelStyle: {
                fontSize: 20,
                textAlign: "center",
                justifyContent:'center',
                marginVertical:'auto'
              },
              
             }}>
                <Tab.Screen name="Spells"
                    children={createSpellStack}
                    
                />
                <Tab.Screen name="Filter"
                    component={createFilterStack}
                    
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
const mapStateToProps = (state) => ({
    spell: state.selectedSpellReducer
});
export default connect(mapStateToProps)(Feed)
