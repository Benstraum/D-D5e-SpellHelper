import React, { useState, useEffect } from 'react';
import { Text, ScrollView, View, Button } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles'
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';


import Search from '../Search/Search'
import ModularSwitch from '../ModularSwitch/ModularSwitch'
//imported to be able to navigate/ push to different screens
import * as RootNavigation from '../../RootNavigation.js';

const Filter = (props) => {
  const sendToScreen = () => {
    RootNavigation.navigate('Filtered Spell List')
  }
  // const inclusiveFilter = () => {
  //   // test cases
  //   let list = props.allSpells
  //   // does the test strings contains this terms?
  //   let queries = props.filterQueries
  //   // run the tests agains every element in the array
  //   let newSpellList = []
  //   for (let item of list) {
  //     queries.forEach(el =>{
  //       item[el.param].includes(el.query)&&  newSpellList.push(item)
  //   })  
  //   }
  // props.dispatch({type:'SET_FILTER_LIST', payload:newSpellList})
  //   sendToScreen()
  // }
  // const exclusiveFilter = () => {
  //   // test cases
  //   let list = props.allSpells
  //   let betterArr =Object.values(list)
  //   // does the test strings contains this terms?
  //   let queries = props.filterQueries
  //   // run the tests agains every element in the array
  //   let newSpellList = []
  //   let truthyDetector = 0
  //   for (let item of betterArr) {
  //    queries.forEach(el =>{
  //       item[el.param].includes(el.query)&& truthyDetector++
  //   })  
  //   queries.length ===truthyDetector && newSpellList.push(item)
  //   truthyDetector = 0
  // }
  // props.dispatch({type:'SET_FILTER_LIST', payload:newSpellList})
  //   sendToScreen()
  // }
  return (
    <ScrollView style={{backgroundColor: '#21211f', height:'100vh'}}>
       <View style={{ backgroundColor: '#21211f', flexDirection: 'row', justifyContent:'space-evenly', paddingVertical: 15, alignItems: 'center' }}>
        <Text style={styles.spellNameHeaders}>Advanced Filters</Text>
       </View>
         <Collapse style={{padding:5}}>
        <CollapseHeader>
          <View style={{ backgroundColor: 'black' }}>
            <Text style={styles.filterSubjectDivider}>
              Class
            </Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <ModularSwitch param='classes' filterQuery='bard' title="Bard" />
          <ModularSwitch param='classes' filterQuery='cleric' title="Cleric" />
          <ModularSwitch param='classes' filterQuery='druid' title="Druid" />
          <ModularSwitch param='classes' filterQuery='paladin' title="Paladin" />
          <ModularSwitch param='classes' filterQuery='ranger' title="Ranger" />
          <ModularSwitch param='classes' filterQuery='sorcerer' title="Sorcerer" />
          <ModularSwitch param='classes' filterQuery='warlock' title="Warlock" />
          <ModularSwitch param='classes' filterQuery='wizard' title="Wizard" />
        </CollapseBody>
      </Collapse>
      <Collapse style={{padding:5}}>
        <CollapseHeader>
          <View style={{ backgroundColor: 'black' }}>
            <Text style={styles.filterSubjectDivider}>
              Scools of Magic
            </Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <ModularSwitch param='spell_type' filterQuery='abjuration' title="Abjuration" />
          <ModularSwitch param='spell_type' filterQuery='conjuration' title="Conjuration" />
          <ModularSwitch param='spell_type' filterQuery='divination' title="Divination" />
          <ModularSwitch param='spell_type' filterQuery='enchantment' title="Enchantment" />
          <ModularSwitch param='spell_type' filterQuery='evocation' title="Evocation" />
          <ModularSwitch param='spell_type' filterQuery='illusion' title="Illusion" />
          <ModularSwitch param='spell_type' filterQuery='necromancy' title="Necromancy" />
          <ModularSwitch param='spell_type' filterQuery='transmutation' title="Transmutation" />
        </CollapseBody>
      </Collapse>
      <Collapse style={{padding:5}}>
        <CollapseHeader>
          <View style={{ backgroundColor: 'black' }}>
            <Text style={styles.filterSubjectDivider}>
              Spell Range
               </Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <ModularSwitch param='spell_range' filterQuery='Self' title="Self" />
          <ModularSwitch param='spell_range' filterQuery='Touch' title="Touch" />
          <ModularSwitch param='spell_range' filterQuery='5' title="5 ft" />
          <ModularSwitch param='spell_range' filterQuery='10' title="10 ft" />
          <ModularSwitch param='spell_range' filterQuery='15' title="15 ft" />
          <ModularSwitch param='spell_range' filterQuery='30' title="30 ft" />
          <ModularSwitch param='spell_range' filterQuery='60' title="60 ft" />
          <ModularSwitch param='spell_range' filterQuery='90' title="90 ft" />
          <ModularSwitch param='spell_range' filterQuery='120' title="120 ft" />
        </CollapseBody>
      </Collapse>
      <Collapse style={{padding:5}}>
        <CollapseHeader>
          <View style={{ backgroundColor: 'black' }}>
            <Text style={styles.filterSubjectDivider}>
              Spell Components Needed
               </Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <ModularSwitch param='components' filterQuery='V' title="Verbal" />
          <ModularSwitch param='components' filterQuery='S' title="Somatic" />
          <ModularSwitch param='components' filterQuery='M' title="Material" />
          <ModularSwitch param='components' filterQuery='gp' title="Costs Money" />
        </CollapseBody>
      </Collapse>
      <Collapse style={{padding:5}}>
        <CollapseHeader>
          <View style={{ backgroundColor: 'black' }}>
            <Text style={styles.filterSubjectDivider}>
              Spell Duration
               </Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <ModularSwitch param='duration' filterQuery='Instantaneous' title="Instantaneous" />
          <ModularSwitch param='duration' filterQuery='Concentration' title="Concentration" />
          <ModularSwitch param='duration' filterQuery='1 m' title="1 Minute" />
          <ModularSwitch param='duration' filterQuery='10 m' title="10 Minutes" />
          <ModularSwitch param='duration' filterQuery='hours' title="Hours" />
          <ModularSwitch param='duration' filterQuery='day' title="Days" />
        </CollapseBody>
      </Collapse>
      <Collapse style={{padding:5}}>
        <CollapseHeader>
          <View style={{ backgroundColor: 'black' }}>
            <Text style={styles.filterSubjectDivider}>
              Casting Time
               </Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <ModularSwitch param='casting_time' filterQuery='reaction' title="Reaction" />
          <ModularSwitch param='casting_time' filterQuery='bonus action' title="Bonus Action" />
          <ModularSwitch param='casting_time' filterQuery='1 action' title="Action" />
          <ModularSwitch param='casting_time' filterQuery='1 minute' title="1 Minute" />
          <ModularSwitch param='casting_time' filterQuery='10 minutes' title="10 Minute" />
          <ModularSwitch param='casting_time' filterQuery='hour' title="Hours" />
        </CollapseBody>
      </Collapse>
      <Collapse style={{padding:5}}>
        <CollapseHeader>
          <View style={{ backgroundColor: 'black' }}>
            <Text style={styles.filterSubjectDivider}>
              Damage Type
               </Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <ModularSwitch param='description' filterQuery='acid damage' title="Acid" />
          <ModularSwitch param='description' filterQuery='bludgeoning damage' title="Bludgeoning" />
          <ModularSwitch param='description' filterQuery='cold damage' title="Cold" />
          <ModularSwitch param='description' filterQuery='fire damage' title="Fire" />
          <ModularSwitch param='description' filterQuery='force damage' title="Force" />
          <ModularSwitch param='description' filterQuery='lightning damage' title="Lightning" />
          <ModularSwitch param='description' filterQuery='necrotic damage' title="Necrotic" />
          <ModularSwitch param='description' filterQuery='piercing damage' title="Piercing" />
          <ModularSwitch param='description' filterQuery='poison damage' title="Poison" />
          <ModularSwitch param='description' filterQuery='psychic damage' title="Psychic" />
          <ModularSwitch param='description' filterQuery='radiant damage' title="Radiant" />
          <ModularSwitch param='description' filterQuery='slashing damage' title="Slashing" />
          <ModularSwitch param='description' filterQuery='thunder damage' title="Thunder" />
        </CollapseBody>
      </Collapse>
      <View style={{ backgroundColor: '#21211f', flexDirection: 'row', justifyContent:'space-evenly', paddingVertical: 15, alignItems: 'center' }}>
      {
        !! props.filterQueries.length && props.filterList.length &&
      <Text>We found {props.filterList.length} spells that match your queries! Click to view</Text>
      }
      </View>
    </ScrollView>
  )
};
const mapStateToProps = (state) => ({
  filterQueries: state.filterQueryReducer,
  allSpells: state.allSpellReducer,
  filterList: state.filterListReducer
});
export default connect(mapStateToProps)(Filter);