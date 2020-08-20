import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'
import React, { useEffect,useState } from 'react';
import { Text, View, ImageBackground, Button, SafeAreaView, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

//compact component
const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.title}>{item.spell_name}</Text>
    </TouchableOpacity>
  );

const Spells = (props) => {
    const [selectedId, setSelectedId] = useState(null);

   const renderItem = ({ item }) => {
     const backgroundColor = item.spell_id === selectedId ? "#6e3b6e" : "#f9c2ff";
 
     return (
       <Item
         item={item}
         onPress={() => setSelectedId(item.spell_id)}
         style={{ backgroundColor }}
       />
     );
   };
 
   return (
     <SafeAreaView style={styles.container}>
       <FlatList
         data={props.spells}
         renderItem={renderItem}
         keyExtractor={(item) => item.spell_id}
         extraData={selectedId}
       />
     </SafeAreaView>
   );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
const mapStateToProps = (state) => ({
    spells:state.allSpellReducer
});
export default connect(mapStateToProps)(Spells);