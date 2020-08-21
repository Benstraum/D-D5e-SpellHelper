import React, { useEffect, useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { Item } from 'semantic-ui-react'

import styles from '../styles'

const SelectedSpell = (props) => {
    console.log(props.spell)
    let spell = props.spell

    return (
        <ScrollView style={{backgroundColor:'black', flex:1}}>
            <View style={styles.spellView}>
            <Text style={styles.h1}>{spell.spell_name}</Text>

            <Text style={styles.spellText}><b>Spell Type</b>: {spell.spell_type}</Text>

            <Text style={styles.spellText}><b>Classes</b>: {spell.classes.join(', ')}</Text>

            <Text style={styles.spellText}><b>Components</b>: {spell.Component || 'none'}</Text>

            <Text style={styles.spellText}><b>Duration</b>: {spell.duration}</Text>

            {!!spell.higher_levels && <Text style={styles.spellText}><b>Higher Level Casting</b>: {spell.higher_levels}</Text>

            }
            <Text style={styles.spellText}><b>Casting Time</b>: {spell.casting_time}</Text>

            <Text style={styles.spellText}><b>Spell Range</b>: {spell.spell_range}</Text>

            <Text style={styles.spellText}><b>Description</b>: {spell.description.replace('<br>', '')}</Text>
            </View>
        </ScrollView>
       
        )
}


const mapStateToProps = (state) => ({
    spell: state.selectedSpellReducer
});
export default connect(mapStateToProps)(SelectedSpell);