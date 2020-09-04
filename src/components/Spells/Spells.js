import 'react-native-gesture-handler'
import React, { useEffect, useState, useRef } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Search from '../Search/Search'
import SpellPageStructure from '../SpellPageStructure/SpellPageStructure'

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
   let searchSpells = props.search["spells"]
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
            {!!searchSpells.length ?
                level.map((Lv, index) => (
                    !!searchSpells.filter(item => item.spell_level === Lv).length &&
                    <SpellPageStructure index={index} Lv={Lv} propSpells={searchSpells} selectSpell={selectSpell}/>
                ))
                :
                level.map((Lv, index) => (
                    <SpellPageStructure index={index} Lv={Lv} propSpells={allSpells} selectSpell={selectSpell}/>
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