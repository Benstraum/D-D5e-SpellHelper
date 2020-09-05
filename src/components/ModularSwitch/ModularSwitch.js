import React, { useState } from 'react';
import { Text, View, Button, Switch, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles'

const ModularSwitch = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = (query, param) => {
        isEnabled === false ?
            props.dispatch({ type: 'SET_QUERIES', payload: {query:query,param:param} })
            :
            props.dispatch({ type: 'REMOVE_QUERY', payload:  {query:query,param:param} })

        setIsEnabled(previousState => !previousState)
    }

    return (
        <View style={{ backgroundColor: 'black', borderColor: 'grey', paddingVertical: 4 }}>
            <View style={styles.filterBackground}>
                <Text style={styles.spellMapItemName}>
                    {props.title}
                </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "maroon" }}
                    thumbColor={isEnabled ? "#FF3838" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => toggleSwitch(props.filterQuery, props.param)}
                    value={isEnabled}
                />
            </View>
        </View>
    );
}

const mapStateToProps = (state) => ({
    state
});
export default connect(mapStateToProps)(ModularSwitch);