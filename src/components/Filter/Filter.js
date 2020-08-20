import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'
import React, { useEffect } from 'react';
import { Text, View, ImageBackground, Button } from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles.js'
//imported to be able to navigate/ push to different screens
import * as RootNavigation from '../../RootNavigation.js';

const Filter = (props) => {
   console.log(props.state)
    return(<View style={styles.container}>

        
      <Button title="All Spells" onPress={()=>RootNavigation.navigate('allSpells')}/>
      <Button title="Search for Spell"/>
        
    </View>
)};
const mapStateToProps = (state) => ({
    state
});
export default connect(mapStateToProps)(Filter);