import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import Feed from './src/Feed.js'

function App(props) {
  useEffect(() => {
    props.dispatch({type:'GET_ALL_SPELLS'})
  },[]);
  return (
    <ImageBackground source={require('./assets/background.jpg')} style={styles.bgImage}>
      <Feed />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImage:{
    height:'100%',
    width:'100%',
    flex:1,
    zIndex:0,
    position:'absolute',
    opacity:0.7,
    backgroundColor: '#313131',
},
});


export default connect()(App)