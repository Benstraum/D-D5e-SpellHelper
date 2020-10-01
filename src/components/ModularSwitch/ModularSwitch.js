import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Switch, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles'

const ModularSwitch = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    useEffect(()=>{
       props.filterQueryReducer.some(el=> el.query ===props.filterQuery) && setIsEnabled(true)
    },[])
    // const toggleSwitch = (query, param) => {
    //     isEnabled === false ?
    //         props.dispatch({ type: 'SET_QUERIES', payload: {query:query,param:param} })
    //         :
    //         props.dispatch({ type: 'REMOVE_QUERY', payload:  {query:query,param:param} })

    //     setIsEnabled(previousState => !previousState)
    // }
    const isFirstRun = useRef(true);
    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
       console.log(props.filterList.length)
    }, [props.filterList]);

const exclusiveFilter = () => {
    // test cases
    let list = props.allSpells
    let betterArr =Object.values(list)
    // does the test strings contains this terms?
    let queries = props.filterQueryReducer
    // run the tests agains every element in the array
    let newSpellList = []
    let truthyDetector = 0
    for (let item of betterArr) {
     queries.forEach(el =>{
        item[el.param].includes(el.query)&& truthyDetector++
    })  
    queries.length ===truthyDetector && newSpellList.push(item)
    truthyDetector = 0
  }
  props.dispatch({type:'SET_FILTER_LIST', payload:newSpellList})
  }
const addNewFilterItem =()=>{
    props.dispatch({ type: 'SET_QUERIES', payload: {query:props.filterQuery,param:props.param} })

    exclusiveFilter()
}
const removeFilterItem= ()=>{
    props.dispatch({ type: 'REMOVE_QUERY', payload:  {query:props.filterQuery,param:props.param} })
    exclusiveFilter()
}

    const toggleSwitch = () => {
        isEnabled === false ?
        addNewFilterItem()
        :
        removeFilterItem()

        setIsEnabled(previousState => !previousState)
    }

    return (
        <View style={{ borderColor: 'grey', paddingVertical: 4, borderBottomColor:'black', borderBottomWidth:2 }}>
            <View style={styles.filterBackground}>
                <Text style={styles.spellMapItemName}>
                    {props.title}
                </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "maroon" }}
                    thumbColor={isEnabled ? "#FF3838" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => toggleSwitch()}
                    value={isEnabled}
                />
            </View>
        </View>
    );
}

const mapStateToProps = (state) => ({
  filterQueryReducer: state.filterQueryReducer,
  allSpells: state.allSpellReducer,
  filterList: state.filterListReducer
});
export default connect(mapStateToProps)(ModularSwitch);