import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
const SpellTabMapItem = (props) => {
    let item = props.item
    let selectSpell = props.selectSpell
    return (
        <TouchableOpacity onPress={() => selectSpell(item)} style={{ padding: 4 }}>
            <View style={{ backgroundColor: '#21211f', zIndex: 1, borderRadius: 14, padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: 'white', fontWeight: 'bold', paddingHorizontal: 10 }}>{item.spell_name}</Text>
                <Text style={{ color: 'white' }}>{item.spell_type.includes(props.Lv) ? item.spell_type.slice(9) : item.spell_type}</Text>
            </View>
        </TouchableOpacity>
    )

}

export default SpellTabMapItem;