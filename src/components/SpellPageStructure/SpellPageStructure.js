import React from 'react';
import { Text, View } from 'react-native';
import SpellTabMapItem from '../SpellTabMapItem/SpellTapMapItem'

const SpellPageStructure =(props)=>{
    return (
        <View key={props.index} style={{backgroundColor: 'black', borderColor:'grey'}}>
        <View style={{backgroundColor: '#141413', padding: 10, zIndex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
            <Text style={{ color: 'white', fontSize: 18 }}>Level {props.Lv}</Text>
            <Text style={{ color: 'white' }}>Total: {props.propSpells.filter(item => item.spell_level === props.Lv).length}</Text>
        </View>
        <View>
            {
                props.propSpells.filter(item => item.spell_level === props.Lv).map((item, i) => (
                    <SpellTabMapItem key={i} item={item} index={i} Lv={props.Lv} selectSpell={props.selectSpell} style={{padding:0, margin:0}} />
                ))
            }
        </View>
    </View>
    )
}

export default (SpellPageStructure)