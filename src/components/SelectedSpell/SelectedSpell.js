import React, { useEffect, useState, Component } from 'react';
import { Text, View, ImageBackground, Button, SafeAreaView, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Item } from 'semantic-ui-react'

import styles from '../styles'

const SelectedSpell = (props) => {
  console.log(props.spell)
  let spell = props.spell
    return (
        <View>
            <Item>
                <Item.Content>
                    <Item.Header><Text style={{ color: 'red', fontSize:20 }}>{spell.spell_name}</Text></Item.Header>
                    <Item.Meta>
                       <Text style={styles.spellText}>{spell.spell_type}</Text> 
                    </Item.Meta>
                    <Item.Description>
                    <Text style={styles.spellText}>  <b>Classes that can use the spell:</b><br /> {spell.classes.join(', ')}</Text> 
                    <br />
                    <Text style={styles.spellText}> <b>components:</b> {spell.Component || 'none'}</Text>
                    <br />
                    <Text style={styles.spellText}>  <b>duration:</b> {spell.duration}</Text>
                        <br />
                        <Text style={styles.spellText}> <b>higher levels:</b> {spell.higher_levels}</Text>
                        <br />
                        <Text style={styles.spellText}> <b>casting time:</b> {spell.casting_time}</Text>
                        <br />
                        <Text style={styles.spellText}> <b>spell range:</b> {spell.spell_range}</Text>
                        <br />
                        <Text style={styles.spellText}> <b>description: </b>{spell.description.replace('<br>', '')}</Text>
                        <br />
                    </Item.Description>
                </Item.Content>
            </Item>
        </View>
    )
}


const mapStateToProps = (state) => ({
    spell: state.selectedSpellReducer
});
export default connect(mapStateToProps)(SelectedSpell);