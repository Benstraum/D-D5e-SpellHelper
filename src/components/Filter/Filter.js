import { StatusBar } from 'expo-status-bar';
import React, {  useState } from 'react';
import { Text, View, Button, Switch, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles'
//imported to be able to navigate/ push to different screens
import * as RootNavigation from '../../RootNavigation.js';


const ModularSwitch = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = (query) => {

    setIsEnabled(previousState => !previousState)
    isEnabled === false && console.log(query)

  }

  return (
    <View style={{backgroundColor: 'black', borderColor:'grey', padding:4}}>
    <View style={styles.filterBackground}>
      <Text style={{ color: 'white', fontSize: 18, opacity: 1 }}>
        {props.title}
      </Text>
      <Switch
        trackColor={{ false: "#767577", true: "maroon" }}
        thumbColor={isEnabled ? "#FF3838" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => toggleSwitch(props.filterQuery)}
        value={isEnabled}
      />
    </View>
    </View>
  );
}


const Filter = (props) => {

  return (
    <ScrollView style={{ backgroundColor: 'black', flex: 1, padding:4 }}>
      <Text style={styles.filterSubjectDivider}
      >Class</Text>
        <ModularSwitch filterQuery='Bard' title="Bard" />
        <ModularSwitch filterQuery='Cleric' title="Cleric" />
        <ModularSwitch filterQuery='Druid' title="Druid" />
        <ModularSwitch filterQuery='Paladin' title="Paladin" />
        <ModularSwitch filterQuery='Ranger' title="Ranger" />
        <ModularSwitch filterQuery='Sorcerer' title="Sorcerer" />
        <ModularSwitch filterQuery='Warlock' title="Warlock" />
        <ModularSwitch filterQuery='Wizard' title="Wizard" />
      <Text style={styles.filterSubjectDivider}
      >School of Magic</Text>
        <ModularSwitch filterQuery='Abjuration' title="Abjuration" />
        <ModularSwitch filterQuery='Conjuration' title="Conjuration" />
        <ModularSwitch filterQuery='Divination' title="Divination" />
        <ModularSwitch filterQuery='Enchantment' title="Enchantment" />
        <ModularSwitch filterQuery='Evocation' title="Evocation" />
        <ModularSwitch filterQuery='Illusion' title="Illusion" />
        <ModularSwitch filterQuery='Necromancy' title="Necromancy" />
        <ModularSwitch filterQuery='Transmutation' title="Transmutation" />
      <Text style={styles.filterSubjectDivider}
      >Range</Text>
        <ModularSwitch filterQuery='self' title="Self" />
        <ModularSwitch filterQuery='touch' title="Touch" />
        <ModularSwitch filterQuery='5' title="5 ft" />
        <ModularSwitch filterQuery='10' title="10 ft" />
        <ModularSwitch filterQuery='15' title="15 ft" />
        <ModularSwitch filterQuery='30' title="30 ft" />
        <ModularSwitch filterQuery='60' title="60 ft" />
        <ModularSwitch filterQuery='90' title="90 ft" />
        <ModularSwitch filterQuery='120' title="120 ft" />
      <Text style={styles.filterSubjectDivider}
      >Components Needed</Text>
        <ModularSwitch filterQuery='V' title="Verbal" />
        <ModularSwitch filterQuery='S' title="Somatic" />
        <ModularSwitch filterQuery='M' title="Material" />
        <ModularSwitch filterQuery='gp' title="Costs Money" />
      <Text style={styles.filterSubjectDivider}
      >Spell Duration</Text>
        <ModularSwitch filterQuery='Instantaneous' title="Instantaneous" />
        <ModularSwitch filterQuery='Concentration' title="Concentration" />
        <ModularSwitch filterQuery='1 minute' title="1 Minute" />
        <ModularSwitch filterQuery='10' title="10 Minutes" />
        <ModularSwitch filterQuery='hour' title="Hours" />
        <ModularSwitch filterQuery='day' title="Days" />
        <Text style={styles.filterSubjectDivider}
      > Casting Time</Text>
         <ModularSwitch filterQuery='reaction' title="Reaction" />
        <ModularSwitch filterQuery='bonus action' title="Bonus Action" />
        <ModularSwitch filterQuery='1 action' title="Action" />
        <ModularSwitch filterQuery='1 minute' title="1 Minute" />
        <ModularSwitch filterQuery='10 minutes' title="10 Minute" />
        <ModularSwitch filterQuery='hour' title="Hours" />
        <Text style={styles.filterSubjectDivider}
      >Ability to Upcast</Text>
        <ModularSwitch filterQuery={true} title="Upcasting" />
      <Text style={styles.filterSubjectDivider}
      >Damage Type</Text>
        <ModularSwitch filterQuery='acid damage' title="Acid" />
        <ModularSwitch filterQuery='bludgeoning damage' title="Bludgeoning" />
        <ModularSwitch filterQuery='cold damage' title="Cold" />
        <ModularSwitch filterQuery='fire damage' title="Fire" />
        <ModularSwitch filterQuery='Force damage' title="Force" />
        <ModularSwitch filterQuery='lightning damage' title="Lightning" />
        <ModularSwitch filterQuery='necrotic damage' title="Necrotic" />
        <ModularSwitch filterQuery='piercing damage' title="Piercing" />
        <ModularSwitch filterQuery='poison damage' title="Poison" />
        <ModularSwitch filterQuery='psychic damage' title="Psychic" />
        <ModularSwitch filterQuery='radiant damage' title="Radiant" />
        <ModularSwitch filterQuery='slashing damage' title="Slashing" />
        <ModularSwitch filterQuery='thunder damage' title="Thunder" />
    </ScrollView>
  )
};
const mapStateToProps = (state) => ({
  state
});
export default connect(mapStateToProps)(Filter);