import 'react-native-gesture-handler'
import React, { useEffect, useState, useRef } from 'react';
import { Text, View, ScrollView, SectionList, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Search from '../Search/Search'
import SpellTabMapItem from '../SpellTabMapItem/SpellTapMapItem'

import * as RootNavigation from '../../RootNavigation.js';

//styling taken out because android doesnt like these
//top:0, position: 'sticky' 

//compact component
const Spells = (props) => {
    const [render, setRender]=useState(false)
    const [search, setSearch]=useState([])
    const [allSpells, setAllSpells]=useState([])
    useEffect(() => {
    }, [props.spells])

    //Skipping first iteration (exactly like componentWillReceiveProps):
    const isFirstRun = useRef(true);
    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        setAllSpells(props.spells)
        setSearch(props.search)
        setRender(true)
    }, [props.spells]);


    const selectSpell = (spell) => {
        props.dispatch({ type: 'SET_SELECTED_SPELL', payload: spell })
        sendToScreen()
    }


    const sendToScreen = () => {
        RootNavigation.navigate('Spell Details')
    }

    

    let level = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
   let searchSpells = props.search["spells"].length
    console.log(searchSpells)
    // let spellLevelSortArr = []
    // const func = () => {
    //     console.log(props.spells)
    //     level.forEach(Lv => spellLevelSortArr.push(allSpells.filter(item => item.spell_level === Lv)))
    //     console.log(spellLevelSortArr)
    //     return spellLevelSortArr
    // }

// top:0,position:'sticky', lines 63 & 78 views crashed on android
    return (
        <ScrollView style={{ backgroundColor: 'black', flex: 1 }}>
            <Search spellList={allSpells} style={{ position: 'fixed',top:0 }} />
            {!!searchSpells ?

            
                level.map((Lv, index) => (
                    !!searchSpells.filter(item => item.spell_level === Lv).length &&
                    <View key={index} style={{backgroundColor: 'black', borderColor:'grey'}}>
                        <View style={{backgroundColor: '#141413', padding: 10, zIndex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                            <Text style={{ color: 'white', fontSize: 18 }}>Level {Lv}</Text>
                            <Text style={{ color: 'white' }}>Total: {searchSpells.filter(item => item.spell_level === Lv).length}</Text>
                        </View>
                        <View>
                            {
                                searchSpells.filter(item => item.spell_level === Lv).map((item, i) => (
                                    <SpellTabMapItem key={i} item={item} index={i} Lv={Lv} selectSpell={selectSpell} style={{padding:0, margin:0}} />
                                ))
                            }
                        </View>
                    </View>
                ))
                :
                level.map((Lv, index) => (<View key={index}>
                    <View style={{backgroundColor: '#141413', width: '100%', padding: 15, zIndex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{ color: 'white', fontSize: 18, opacity: 1 }}>Level {Lv}</Text>
                        <Text style={{ color: 'white' }}>Total: {allSpells.filter(item => item.spell_level === Lv).length}</Text>
                    </View>
                    <View  style={{ position: 'relative' }}>
                        {
                            allSpells.filter(item => item.spell_level === Lv).map((item, i) => (
                                <SpellTabMapItem key={i} item={item} index={i} selectSpell={selectSpell} Lv={Lv} />
                            ))
                        }
                    </View>
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