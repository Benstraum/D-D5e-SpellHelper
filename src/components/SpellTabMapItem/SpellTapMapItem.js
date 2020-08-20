import React, { Component } from 'react'
import {  Icon } from 'semantic-ui-react'
import {Text, TouchableOpacity} from 'react-native'
const SpellTabMapItem =(props)=> {
       let item = props.item
       let selectSpell = props.selectSpell
        return (
            <TouchableOpacity onPress={()=>selectSpell(item)}>
            <div className="spellItem" style={{textAlign:'left',backgroundColor:'#21211f', zIndex:0, padding:12, borderBottom:'2px solid gray'}}>
                <Icon size='large' name='heart outline' inverted />
                <Text style={{color:'white', fontWeight:'bold', fontSize:14, paddingHorizontal:10}}>{item.spell_name}</Text> 
                <Text style={{float:'right',color:'white', fontSize:10}}>{item.spell_type}</Text>
        </div>
        </TouchableOpacity>
        )

}

export default SpellTabMapItem;