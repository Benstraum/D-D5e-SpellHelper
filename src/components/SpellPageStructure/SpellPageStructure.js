import React from 'react';
import { Text, View } from 'react-native';
import SpellTabMapItem from '../SpellTabMapItem/SpellTapMapItem'
import styles from '../styles'

const SpellPageStructure =(props)=>{
   let spells = props.propSpells
    return (
        <View  style={{backgroundColor: 'black', borderColor:'grey'}}>
        <View style={styles.spellLevelHeader}>
            <Text style={styles.spellNameHeaders}>Level {props.Lv}</Text>
            {/* <Text style={styles.spellNameHeaders}>Total: {spells.filter(item => item.spell_level === props.Lv).length}</Text> */}
        </View>
        <View>
            {
                spells.filter(item => item.spell_level === props.Lv).map((item, i) => (
                    <SpellTabMapItem key={i} item={item} index={i} Lv={props.Lv} selectSpell={props.selectSpell} style={{padding:0, margin:0}} />
                ))
            }
        </View>
    </View>
    )
}

export default (SpellPageStructure)