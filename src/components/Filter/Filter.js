import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, ImageBackground, Button, Switch, ScrollView } from 'react-native';
import CheckBox from 'react-native-check-box'
import { connect } from 'react-redux';

//imported to be able to navigate/ push to different screens
import * as RootNavigation from '../../RootNavigation.js';
import MultiSelect from 'react-native-multiple-select';


const ModularSwitch = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = (query) => {

    setIsEnabled(previousState => !previousState)
    isEnabled === false && console.log(query)

  }

  return (
    <View style={{ backgroundColor: '#141413', width: '100%', padding: 15, zIndex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ color: 'white', fontSize: 18, opacity: 1 }}>
        {props.title}
      </Text>
      <Switch
        trackColor={{ false: "#767577", true: "maroon" }}
        thumbColor={isEnabled ? "#FF3838" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={()=> toggleSwitch(props.filterQuery)}
        value={isEnabled}
      />
    </View>
  );
}


const Filter = (props) => {

  return (
    <ScrollView style={{ backgroundColor: 'black', flex: 1 }}>
        <Text style={{ color: 'white', fontSize: 22, opacity: 1, width: '100%', padding: 15, zIndex: 1, flexDirection: 'row', textAlign:'center' }}
        >Filter By Class</Text>
        <ModularSwitch filterQuery='Bard' title="Bard"/>
        <ModularSwitch filterQuery='Cleric' title="Cleric"/>
        <ModularSwitch filterQuery='Druid' title="Druid"/>
        <ModularSwitch filterQuery='Paladin' title="Paladin"/>
        <ModularSwitch filterQuery='Ranger' title="Ranger"/>
        <ModularSwitch filterQuery='Sorcerer' title="Sorcerer"/>
        <ModularSwitch filterQuery='Warlock' title="Warlock"/>
        <ModularSwitch filterQuery='Wizard' title="Wizard"/>
        <Text style={{ color: 'white', fontSize: 22, opacity: 1, width: '100%', padding: 15, zIndex: 1, flexDirection: 'row', textAlign:'center' }}
        >Filter By School of Magic</Text>
        <ModularSwitch filterQuery='Abjuration' title="Abjuration"/>
        <ModularSwitch filterQuery='Conjuration' title="Conjuration"/>
        <ModularSwitch filterQuery='Divination' title="Divination"/>
        <ModularSwitch filterQuery='Enchantment' title="Enchantment"/>
        <ModularSwitch filterQuery='Evocation' title="Evocation"/>
        <ModularSwitch filterQuery='Illusion' title="Illusion"/>
        <ModularSwitch filterQuery='Necromancy' title="Necromancy"/>
        <ModularSwitch filterQuery='Transmutation' title="Transmutation"/>
        <Text style={{ color: 'white', fontSize: 22, opacity: 1, width: '100%', padding: 15, zIndex: 1, flexDirection: 'row', textAlign:'center' }}
        >Filter By Components Needed</Text>
         <ModularSwitch filterQuery='V' title="Verbal"/>
        <ModularSwitch filterQuery='S' title="Somatic"/>
        <ModularSwitch filterQuery='M' title="Material"/>
        <ModularSwitch filterQuery='gp' title="Costs Money"/>

    </ScrollView>
  )
};
const mapStateToProps = (state) => ({
  state
});
export default connect(mapStateToProps)(Filter);