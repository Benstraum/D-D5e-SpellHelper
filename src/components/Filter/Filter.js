import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'
import React, { useEffect } from 'react';
import { Text, View, ImageBackground, Button } from 'react-native';
import { connect } from 'react-redux';

//imported to be able to navigate/ push to different screens
import * as RootNavigation from '../../RootNavigation.js';
import MultiSelect from 'react-native-multiple-select';


const Filter = (props) => {


  return (
    <View style={{backgroundColor:'black', flex:1}}>
   <Text>will make filters here soon</Text>
    </View>
  )
};
const mapStateToProps = (state) => ({
  state
});
export default connect(mapStateToProps)(Filter);