import React, { useState } from 'react';
import { Text, ScrollView, View, Button } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles'

import Search from '../Search/Search'
import ModularSwitch from '../ModularSwitch/ModularSwitch'
//imported to be able to navigate/ push to different screens
import * as RootNavigation from '../../RootNavigation.js';

const Filter = (props) => {
  const inclusiveFilter = () => {
    // test cases
    let list = props.allSpells
    // does the test strings contains this terms?
    let queries = props.filterQueries
    // run the tests agains every element in the array
    let newSpellList = []
    for (let item of list) {
      queries.forEach(el =>{
        item[el.param].includes(el.query)&&  newSpellList.push(item)
    })  
    }
    console.log(newSpellList)
  }
  const exclusiveFilter = () => {
    // test cases
    let list = props.allSpells
    let betterArr =Object.values(list)
    // does the test strings contains this terms?
    let queries = props.filterQueries
    // run the tests agains every element in the array
    let newSpellList = []
    let truthyDetector = 0
    for (let item of betterArr) {
     queries.forEach(el =>{
        item[el.param].includes(el.query)&& truthyDetector++
    })  
    queries.length ===truthyDetector && newSpellList.push(item)
    truthyDetector = 0
  }
    console.log(newSpellList)
  }
  return (
    <ScrollView style={{ backgroundColor: 'black', flex: 1 }}>
      <View style={{ backgroundColor: '#21211f', flexDirection: 'row', justifyContent: 'space-evenly', paddingVertical: 15 }}>
        <Button title='Lax filter' onPress={inclusiveFilter} />
        <Button title='strict filter' onPress={exclusiveFilter} />
      </View>
      <View style={{ padding: 4 }}>
        <Text style={styles.filterSubjectDivider}
        >Class</Text>
        <ModularSwitch param='classes' filterQuery='bard' title="Bard" />
        <ModularSwitch param='classes' filterQuery='cleric' title="Cleric" />
        <ModularSwitch param='classes'filterQuery='druid' title="Druid" />
        <ModularSwitch param='classes'filterQuery='paladin' title="Paladin" />
        <ModularSwitch param='classes'filterQuery='ranger' title="Ranger" />
        <ModularSwitch param='classes'filterQuery='sorcerer' title="Sorcerer" />
        <ModularSwitch param='classes'filterQuery='warlock' title="Warlock" />
        <ModularSwitch param='classes'filterQuery='wizard' title="Wizard" />
        <Text style={styles.filterSubjectDivider}
        >School of Magic</Text>
        <ModularSwitch param='spell_type'filterQuery='abjuration' title="Abjuration" />
        <ModularSwitch param='spell_type'filterQuery='conjuration' title="Conjuration" />
        <ModularSwitch param='spell_type'filterQuery='divination' title="Divination" />
        <ModularSwitch param='spell_type'filterQuery='enchantment' title="Enchantment" />
        <ModularSwitch param='spell_type'filterQuery='evocation' title="Evocation" />
        <ModularSwitch param='spell_type'filterQuery='illusion' title="Illusion" />
        <ModularSwitch param='spell_type'filterQuery='necromancy' title="Necromancy" />
        <ModularSwitch param='spell_type'filterQuery='transmutation' title="Transmutation" />
        <Text style={styles.filterSubjectDivider}
        >Range</Text>
        <ModularSwitch param='spell_range'filterQuery='Self' title="Self" />
        <ModularSwitch param='spell_range'filterQuery='Touch' title="Touch" />
        <ModularSwitch param='spell_range'filterQuery='5' title="5 ft" />
        <ModularSwitch param='spell_range'filterQuery='10' title="10 ft" />
        <ModularSwitch param='spell_range'filterQuery='15' title="15 ft" />
        <ModularSwitch param='spell_range'filterQuery='30' title="30 ft" />
        <ModularSwitch param='spell_range'filterQuery='60' title="60 ft" />
        <ModularSwitch param='spell_range'filterQuery='90' title="90 ft" />
        <ModularSwitch param='spell_range'filterQuery='120' title="120 ft" />
        <Text style={styles.filterSubjectDivider}
        >Components Needed</Text>
        <ModularSwitch param='components'filterQuery='V' title="Verbal" />
        <ModularSwitch param='components'filterQuery='S' title="Somatic" />
        <ModularSwitch param='components'filterQuery='M' title="Material" />
        <ModularSwitch param='components'filterQuery='gp' title="Costs Money" />
        <Text style={styles.filterSubjectDivider}
        >Spell Duration</Text>
        <ModularSwitch param='duration'filterQuery='Instantaneous' title="Instantaneous" />
        <ModularSwitch param='duration'filterQuery='Concentration' title="Concentration" />
        <ModularSwitch param='duration'filterQuery='1 m' title="1 Minute" />
        <ModularSwitch param='duration'filterQuery='10 m' title="10 Minutes" />
        <ModularSwitch param='duration'filterQuery='hours' title="Hours" />
        <ModularSwitch param='duration'filterQuery='day' title="Days" />
        <Text style={styles.filterSubjectDivider}
        > Casting Time</Text>
        <ModularSwitch param='casting_time'filterQuery='reaction' title="Reaction" />
        <ModularSwitch param='casting_time'filterQuery='bonus action' title="Bonus Action" />
        <ModularSwitch param='casting_time'filterQuery='1 action' title="Action" />
        <ModularSwitch param='casting_time'filterQuery='1 minute' title="1 Minute" />
        <ModularSwitch param='casting_time'filterQuery='10 minutes' title="10 Minute" />
        <ModularSwitch param='casting_time'filterQuery='hour' title="Hours" />
        <Text style={styles.filterSubjectDivider}
        >Ability to Upcast</Text>
        <ModularSwitch param='higher_levels'filterQuery={true} title="Upcasting" />
        <Text style={styles.filterSubjectDivider}
        >Damage Type</Text>
        <ModularSwitch param='description'filterQuery='acid damage' title="Acid" />
        <ModularSwitch param='description'filterQuery='bludgeoning damage' title="Bludgeoning" />
        <ModularSwitch param='description'filterQuery='cold damage' title="Cold" />
        <ModularSwitch param='description'filterQuery='fire damage' title="Fire" />
        <ModularSwitch param='description'filterQuery='force damage' title="Force" />
        <ModularSwitch param='description'filterQuery='lightning damage' title="Lightning" />
        <ModularSwitch param='description'filterQuery='necrotic damage' title="Necrotic" />
        <ModularSwitch param='description'filterQuery='piercing damage' title="Piercing" />
        <ModularSwitch param='description'filterQuery='poison damage' title="Poison" />
        <ModularSwitch param='description'filterQuery='psychic damage' title="Psychic" />
        <ModularSwitch param='description'filterQuery='radiant damage' title="Radiant" />
        <ModularSwitch param='description'filterQuery='slashing damage' title="Slashing" />
        <ModularSwitch param='description'filterQuery='thunder damage' title="Thunder" />
      </View>
    </ScrollView>
  )
};
const mapStateToProps = (state) => ({
  filterQueries: state.filterQueryReducer,
  allSpells: state.allSpellReducer
});
export default connect(mapStateToProps)(Filter);