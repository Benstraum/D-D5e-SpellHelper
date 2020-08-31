import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, ImageBackground, Button,Switch, StyleSheet } from 'react-native';
import CheckBox from 'react-native-check-box'
import { connect } from 'react-redux';

//imported to be able to navigate/ push to different screens
import * as RootNavigation from '../../RootNavigation.js';
import MultiSelect from 'react-native-multiple-select';


const ModularSwitch = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{backgroundColor: '#141413', width: '100%', padding: 15, zIndex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
      <Switch
        trackColor={{ false: "#767577", true: "maroon" }}
        thumbColor={isEnabled ? "#FF3838" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
  );
}


const Filter = (props) => {

  return (
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <ModularSwitch/>
    </View>
  )
};
const mapStateToProps = (state) => ({
  state
});
export default connect(mapStateToProps)(Filter);