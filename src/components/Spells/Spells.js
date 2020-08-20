import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import {  Divider } from 'semantic-ui-react'
import SpellTabMapItem from '../SpellTabMapItem/SpellTapMapItem'

import * as RootNavigation from '../../RootNavigation.js';
//compact component
const Spells = (props) => {
    const selectSpell =(spell)=> {
       props.dispatch({type:'SET_SELECTED_SPELL', payload:spell})
       sendToScreen()
     }
     const sendToScreen=()=>{
        RootNavigation.navigate('selectedSpell')
     }
    let spells = props.spells
    let level = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    console.log(props.spell)
    return (
        <ScrollView>
            {
                level.map((Lv, index) => (<div style={{}} key={index} className="mappedLevels">
                    <div style={{ backgroundColor: 'black', width: '100%', padding: '15px', position: 'sticky', top: 0, zIndex:1 }}>
                        <Text style={{ color: 'white', fontSize: '18px', textAlign: 'center', justifyContent: 'top', opacity: 1 }}>Level {Lv}</Text>
                        <Text style={{ color: 'white', float: 'right', backgroundColor: 'black' }}>Total: {spells.filter(item => item.spell_level === Lv).length}</Text>
                    </div>
                    <View style={{ position: 'relative' }}>
                        {
                            spells.filter(item => item.spell_level === Lv).map((item, i) => (
                                    <SpellTabMapItem key={i} item={item} index={i} selectSpell={selectSpell} />
                            ))
                        }
                    </View>
                </div>
                ))
            }
        </ScrollView>
    )
}
const mapStateToProps = (state) => ({
    spells: state.allSpellReducer,
    spell:state
});
export default connect(mapStateToProps)(Spells);