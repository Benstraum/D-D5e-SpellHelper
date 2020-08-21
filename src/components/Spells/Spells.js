import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

import Search from '../Search/Search'
import SpellTabMapItem from '../SpellTabMapItem/SpellTapMapItem'

import * as RootNavigation from '../../RootNavigation.js';
//compact component
const Spells = (props) => {
    const selectSpell = (spell) => {
        props.dispatch({ type: 'SET_SELECTED_SPELL', payload: spell })
        sendToScreen()
    }
    const sendToScreen = () => {
        RootNavigation.navigate('selectedSpell')
    }
    let spells = props.spells
    let level = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <ScrollView>
            <Search spellList={spells} style={{position:'absolute', top:0}}/>
            {props.search.spells.length ?
            
            level.map((Lv, index) => (
                !!props.search.spells.filter(item => item.spell_level === Lv).length &&
                <View key={index}>
                <View style={{ backgroundColor: 'black', width: '100%', padding: 15, zIndex: 1, flexDirection: 'row',top:0,position:'sticky', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white', fontSize: 18, opacity: 1 }}>Level {Lv}</Text>
                    <Text style={{ color: 'white', backgroundColor: 'black' }}>Total: {spells.filter(item => item.spell_level === Lv).length}</Text>
                </View>
                <ScrollView style={{ position: 'relative' }}>


                    {
                       props.search.spells.filter(item => item.spell_level === Lv).map((item, i) => (
                            <SpellTabMapItem key={i} item={item} index={i} selectSpell={selectSpell} />
                        ))
                    }
                </ScrollView>
            </View>
            ))

                :

                level.map((Lv, index) => (<View key={index}>
                    <View style={{ backgroundColor: 'black', width: '100%', padding: 15, zIndex: 1, flexDirection: 'row',top:0,position:'sticky', justifyContent: 'space-between' }}>
                        <Text style={{ color: 'white', fontSize: 18, opacity: 1 }}>Level {Lv}</Text>
                        <Text style={{ color: 'white', backgroundColor: 'black' }}>Total: {spells.filter(item => item.spell_level === Lv).length}</Text>
                    </View>
                    <ScrollView style={{ position: 'relative' }}>


                        {
                            spells.filter(item => item.spell_level === Lv).map((item, i) => (
                                <SpellTabMapItem key={i} item={item} index={i} selectSpell={selectSpell} Lv={Lv} />
                            ))
                        }
                    </ScrollView>
                </View>
                ))


            }
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({
    spells: state.allSpellReducer,
    search: state.searchReducer
});
export default connect(mapStateToProps)(Spells);