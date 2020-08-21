import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#21211f'
    },
    text: {
        color: 'white'
    },
    h1:{
        color: 'red',
         fontSize:20,
         flexDirection:'row',
         padding:10
    },
    spellText:{
        color: 'white',
        flexDirection:'row',
        padding:10
    },
    bgImage:{
        backgroundColor:'black'
    },
    spellView:{
        borderRadius:14,
        backgroundColor:'#21211f',
        marginTop:30,
        flex:.75
    }
});
export default styles;