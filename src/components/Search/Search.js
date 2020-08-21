import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import {connect} from 'react-redux'

const Search = (props) => {
    const [spellName, setSpellName] = useState('');
    const filter =()=>{
        console
        let result = props.spellList
        result = result.filter(item=> item.spell_name.toUpperCase().includes(spellName.toUpperCase()))
        console.log('query result', spellName, result)
        result.length ?
     props.dispatch({type:'SET_SEARCH',payload:{spells:result, query:spellName}})
        :
        console.log('theres nothin cap')
    }
    const reset=()=>{
        props.dispatch({type:'RESET_SEARCH'})
        setSpellName('Search By Spell Name')
    }
    return (
<View style={{backgroundColor:'#21211f', flexDirection:'row', justifyContent:'space-between', paddingVertical:5}}>
    <Button title='reset' onPress={()=>props.dispatch({type:'RESET_SEARCH'})}/>
        <TextInput
        style={{backgroundColor:'white', }}
            type='text'
            placeholder="Search By Spell Name"
            placeholderTextColor="black"
            onChangeText={spellName => setSpellName(spellName)}
        />
        <Button title='search' onPress={()=>filter()}/>
        </View>
    )
}

export default connect()(Search)