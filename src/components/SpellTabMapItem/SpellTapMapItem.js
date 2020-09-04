import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles'
const SpellTabMapItem = (props) => {
    let item = props.item
    let selectSpell = props.selectSpell
    return (
        <TouchableOpacity onPress={() => selectSpell(item)} style={{ padding: 4 }}>
            <View style={styles.spellLevelMapItem}>
                <Text style={styles.spellMapItemName}>{item.spell_name}</Text>
                <Text style={{ color: 'white' }}>{item.spell_type.includes(props.Lv) ? item.spell_type.slice(9) : item.spell_type}</Text>
            </View>
        </TouchableOpacity>
    )

}

export default SpellTabMapItem;