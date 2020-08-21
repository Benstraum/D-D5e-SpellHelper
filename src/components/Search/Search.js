import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux'

const Search = (props) => {
    const [spellName, setSpellName] = useState('');
    const filter = () => {
        console
        let result = props.spellList
        result = result.filter(item => item.spell_name.toUpperCase().includes(spellName.toUpperCase()))
        console.log('query result', spellName, result)
        result.length ?
            props.dispatch({ type: 'SET_SEARCH', payload: { spells: result, query: spellName } })
            :
            console.log('theres nothin cap')
    }
    const reset = () => {
        props.dispatch({ type: 'RESET_SEARCH' })
        setSpellName('Search By Spell Name')
    }
    return (
        <View style={{ backgroundColor: '#21211f', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, alignItems: 'center' }}>
            <Text onPress={() => props.dispatch({ type: 'RESET_SEARCH' })}
                style={{ fontSize: 18, color: 'red', marginLeft: 15 }}
            >Reset</Text>
            <TextInput
                style={{ backgroundColor: 'white', borderRadius: 10, padding: 10 }}
                type='text'
                placeholder="Search By Spell Name"
                placeholderTextColor="black"
                onChangeText={spellName => setSpellName(spellName)}
            />
            <Text onPress={() => filter()}
                style={{ fontSize: 18, color: 'red', marginRight: 15 }}
            >Search</Text>
        </View>
    )
}

export default connect()(Search)