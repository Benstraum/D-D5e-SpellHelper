import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, TextInput, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Search from '../Search/Search'
import SpellTabMapItem from '../SpellTabMapItem/SpellTapMapItem'

import * as RootNavigation from '../../RootNavigation.js';

//styling taken out because android doesnt like these
//top:0, position: 'sticky' 

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
       <View   style={{ backgroundColor: 'black', flex:1 }}>
     <Search spellList={spells} style={{ position: 'absolute'}} />
     <ScrollView style={{ backgroundColor: 'black', flex:1 }}>
            {props.search.spells.length ?

                level.map((Lv, index) => (
                    <ScrollView key={index} style={{backgroundColor: 'black', borderColor:'grey'}}>
                        <View style={{backgroundColor: '#141413', padding: 10, zIndex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: 'white', fontSize: 18 }}>Level {Lv}</Text>
                            <Text style={{ color: 'white' }}>Total: {props.spells.filter(item => item.spell_level === Lv).length}</Text>
                        </View>
                        <View>
                            {
                                props.search.spells.filter(item => item.spell_level === Lv).map((item, i) => (
                                    <SpellTabMapItem key={i} item={item} index={i} selectSpell={selectSpell} style={{padding:0, margin:0}} />
                                ))
                            }
                        </View>
                    </ScrollView>
                ))
                :
                level.map((Lv, index) => (<View key={index}>
                    <View style={{ backgroundColor: '#141413', width: '100%', padding: 15, zIndex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{ color: 'white', fontSize: 18, opacity: 1 }}>Level {Lv}</Text>
                        <Text style={{ color: 'white' }}>Total: {props.spells.filter(item => item.spell_level === Lv).length}</Text>
                    </View>
                    <View  style={{ position: 'relative' }}>
                        {
                            props.spells.filter(item => item.spell_level === Lv).map((item, i) => (
                                <SpellTabMapItem key={i} item={item} index={i} selectSpell={selectSpell} Lv={Lv} />
                            ))
                        }
                    </View>
                </View>
                ))
            }
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state) => ({
    spells: state.allSpellReducer,
    search: state.searchReducer
});
export default connect(mapStateToProps)(Spells);