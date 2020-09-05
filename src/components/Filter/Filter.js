import React, { useState } from 'react';
import { Text, ScrollView, View, Button } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles'

import Search from '../Search/Search'
import ModularSwitch from '../ModularSwitch/ModularSwitch'
//imported to be able to navigate/ push to different screens
import * as RootNavigation from '../../RootNavigation.js';

const Filter = (props) => {
  console.log(props.filterQueries)
  const inclusiveFilter = () => {
    // test cases
    let list = props.allSpells
    // does the test strings contains this terms?
    let queries = props.filterQueries
    // run the tests agains every element in the array
    let newSpellList = []
    for (let item of list) {
      let truthyDetector = 0
      let iterableObject = Object.values(item)

      iterableObject.map(thingy => {
        typeof (thingy) === "string" && queries.some(el => thingy.includes(el))  && newSpellList.push(item)
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
   
    for (let item of betterArr) {
      let truthyDetector = 0
     queries.forEach(el =>{
       el.includes('damage') && item.description.includes(el) && truthyDetector++
       el.length<=2 && item.components.includes(el) && truthyDetector++
       item.duration.includes(el) && truthyDetector++
       item.casting_time.includes(el) && truthyDetector++
    })  

    queries.length === truthyDetector && newSpellList.push(item)
    truthyDetector = 0
  }
    console.log(newSpellList)
  }
  return (
    <ScrollView style={{ backgroundColor: 'black', flex: 1 }}>
      <View style={{ backgroundColor: '#21211f', flexDirection: 'row', justifyContent: 'space-evenly', paddingVertical: 15 }}>
        <Button title='inclusive filter' onPress={inclusiveFilter} />
        <Button title='exclusive filter' onPress={exclusiveFilter} />
      </View>
      <View style={{ padding: 4 }}>
        <Text style={styles.filterSubjectDivider}
        >Class</Text>
        <ModularSwitch filterQuery='bard' title="Bard" />
        <ModularSwitch filterQuery='cleric' title="Cleric" />
        <ModularSwitch filterQuery='druid' title="Druid" />
        <ModularSwitch filterQuery='paladin' title="Paladin" />
        <ModularSwitch filterQuery='ranger' title="Ranger" />
        <ModularSwitch filterQuery='sorcerer' title="Sorcerer" />
        <ModularSwitch filterQuery='warlock' title="Warlock" />
        <ModularSwitch filterQuery='wizard' title="Wizard" />
        <Text style={styles.filterSubjectDivider}
        >School of Magic</Text>
        <ModularSwitch filterQuery='abjuration' title="Abjuration" />
        <ModularSwitch filterQuery='conjuration' title="Conjuration" />
        <ModularSwitch filterQuery='divination' title="Divination" />
        <ModularSwitch filterQuery='enchantment' title="Enchantment" />
        <ModularSwitch filterQuery='evocation' title="Evocation" />
        <ModularSwitch filterQuery='illusion' title="Illusion" />
        <ModularSwitch filterQuery='necromancy' title="Necromancy" />
        <ModularSwitch filterQuery='transmutation' title="Transmutation" />
        <Text style={styles.filterSubjectDivider}
        >Range</Text>
        <ModularSwitch filterQuery='Self' title="Self" />
        <ModularSwitch filterQuery='Touch' title="Touch" />
        <ModularSwitch filterQuery='5 ft' title="5 ft" />
        <ModularSwitch filterQuery='10 ft' title="10 ft" />
        <ModularSwitch filterQuery='15 ft' title="15 ft" />
        <ModularSwitch filterQuery='30 ft' title="30 ft" />
        <ModularSwitch filterQuery='60 ft' title="60 ft" />
        <ModularSwitch filterQuery='90 ft' title="90 ft" />
        <ModularSwitch filterQuery='120 ft' title="120 ft" />
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
        <ModularSwitch filterQuery='1 m' title="1 Minute" />
        <ModularSwitch filterQuery='10 m' title="10 Minutes" />
        <ModularSwitch filterQuery='hours' title="Hours" />
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
        <ModularSwitch filterQuery='force damage' title="Force" />
        <ModularSwitch filterQuery='lightning damage' title="Lightning" />
        <ModularSwitch filterQuery='necrotic damage' title="Necrotic" />
        <ModularSwitch filterQuery='piercing damage' title="Piercing" />
        <ModularSwitch filterQuery='poison damage' title="Poison" />
        <ModularSwitch filterQuery='psychic damage' title="Psychic" />
        <ModularSwitch filterQuery='radiant damage' title="Radiant" />
        <ModularSwitch filterQuery='slashing damage' title="Slashing" />
        <ModularSwitch filterQuery='thunder damage' title="Thunder" />
      </View>
    </ScrollView>
  )
};
const mapStateToProps = (state) => ({
  filterQueries: state.filterQueryReducer,
  allSpells: state.allSpellReducer
});
export default connect(mapStateToProps)(Filter);