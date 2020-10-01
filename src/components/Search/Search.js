import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux'

import * as RootNavigation from '../../RootNavigation.js';

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
        setSpellName('')
        props.dispatch({ type: 'RESET_SEARCH' })
    }
    return (
        <View style={{ backgroundColor: '#21211f', flexDirection: 'row', justifyContent:'space-evenly', paddingVertical: 15, alignItems: 'center' }}>
            {/* <Text onPress={() => reset()}
                style={{ fontSize: 18,fontWeight:'bold' ,color: '#FF3838', marginLeft: 15 }}
            >Reset</Text> */}
            <Icon 
            onPress={() => reset()}
            name='autorenew'
            type='material'
            color= '#FF3838'
            />
            <TextInput
            accessibilityLabel='Searchbar'
                style={{ backgroundColor: 'white', borderRadius: 10, padding: 10 }}
                type='text'
                placeholder="Search By Spell Name"
                placeholderTextColor="black"
                value={spellName}
                onChangeText={spellName => setSpellName(spellName)}
            />
            <Icon 
            onPress={() => filter()}
            name='search'
            type='material'
            color= '#FF3838'
            />
            <Text>
                |
            </Text>
            <Icon 
            onPress={() =>RootNavigation.navigate('Filter')}
            name='settings'
            type='material'
            color= '#FF3838'
            />
            {/* <Text onPress={() => filter()}
                style={{ fontSize: 18,fontWeight:'bold' , color: '#FF3838', marginRight: 15 }}
            >Search</Text> */}
        </View>
    )
}

export default connect()(Search)