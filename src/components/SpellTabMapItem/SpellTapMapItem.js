import React, { Component } from 'react'
import {  Icon } from 'semantic-ui-react'
import {Text, TouchableOpacity, View} from 'react-native'
const SpellTabMapItem =(props)=> {
       let item = props.item
       let selectSpell = props.selectSpell
        return (
            <TouchableOpacity onPress={()=>selectSpell(item)}>
            <View  style={{backgroundColor:'#21211f', zIndex:1, padding:12,flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{color:'white', fontWeight:'bold', paddingHorizontal:10}}>{item.spell_name}</Text> 
                <Text style={{color:'white'}}>{item.spell_type.includes(props.Lv) ?item.spell_type.slice(9) : item.spell_type}</Text>
                {/* <Icon name='heart'  /> */}
        </View>
        </TouchableOpacity>
        )

}

export default SpellTabMapItem;