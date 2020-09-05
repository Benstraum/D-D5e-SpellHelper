import React from 'react'
import { ScrollView} from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles'

import SpellPageStructure from '../SpellPageStructure/SpellPageStructure'
import * as RootNavigation from '../../RootNavigation.js';
const FilteredSpellsPage = (props) =>{
    let level = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const sendToScreen = () => {
        RootNavigation.navigate('Filter Details')
    }
    const selectSpell = (spell) => {
        props.dispatch({ type: 'SET_SELECTED_SPELL', payload: spell })
        sendToScreen()
    }
    let spells = props.spells
    return(
<ScrollView style={styles.container}>
{
     level.map((Lv, index) => (
        !!spells.filter(item => item.spell_level === Lv).length &&
        <SpellPageStructure key={index} index={index} Lv={Lv} propSpells={props.spells} selectSpell={selectSpell}/>
    ))
}
</ScrollView>
    )
}
const mapStateToProps = (state) => ({
    spells: state.filterListReducer
});
export default connect(mapStateToProps)(FilteredSpellsPage)