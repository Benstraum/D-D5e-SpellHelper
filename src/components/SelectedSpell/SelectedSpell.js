import React, { useEffect, useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles'

const SelectedSpell = (props) => {
    let spell = props.spell
    return (
        <ScrollView style={{backgroundColor:'black', flex:1}}>
            <View style={styles.spellView}>
            <Text style={styles.h1}>{spell.spell_name}</Text>

            <Text style={styles.spellText}>Spell Type: {spell.spell_type}</Text>

            <Text style={styles.spellText}>Classes: {spell.classes.join(', ')}</Text>

            <Text style={styles.spellText}>Components: {spell.Component || 'none'}</Text>

            <Text style={styles.spellText}>Duration: {spell.duration}</Text>

            {/* {!!spell.higher_levels && <Text style={styles.spellText}><b>Higher Level Casting</b>: {spell.higher_levels}</Text>

            } */}
            <Text style={styles.spellText}>Casting Time: {spell.casting_time}</Text>

            <Text style={styles.spellText}>Spell Range: {spell.spell_range}</Text>

            <Text style={styles.spellText}>Description: {spell.description.replace('<br>', '')}</Text>
            </View>
        </ScrollView>
       
        )
}


const mapStateToProps = (state) => ({
    spell: state.selectedSpellReducer
});
export default connect(mapStateToProps)(SelectedSpell);