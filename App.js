import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
// import 'semantic-ui-css/semantic.min.css'
import Feed from './src/Feed.js'

function App(props) {
  useEffect(() => {
    props.dispatch({type:'GET_ALL_SPELLS'})
  },[]);
  return (
    <View style={styles.bgImage}>
      <Feed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImage:{
    height:'100%',
    width:'100%',
    flex:1,
    backgroundColor: '#21211f',
},
});


export default connect()(App)