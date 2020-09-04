import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
// import 'semantic-ui-css/semantic.min.css'
import Feed from './src/Feed.js'
function App(props) {
  useEffect(() => {
   // props.dispatch({type:'GET_ALL_SPELLS'})
    getData()

  },[]);

  async function getData() {
  try{
    await fetch('http://127.0.0.1:5000/api/spells', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then(response=>response.json())
    .then(data=>props.dispatch({type:'SET_ALL_SPELLS',payload:data}));
  }
catch(error){
console.log(error)
}
}
  return (
    <View style={styles.bgImage}>
      <StatusBar/>
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
    backgroundColor: 'black',
    marginTop:'9%' //this makes room for statusbar
},
});


export default connect()(App)