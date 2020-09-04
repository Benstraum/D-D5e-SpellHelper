import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#21211f'
    },
    text: {
        color: 'white'
    },
    h1: {
        color: 'red',
        fontSize: 20,
        flexDirection: 'row',
        padding: 10
    },
    spellText: {
        color: 'white',
        flexDirection: 'row',
        padding: 10
    },
    bgImage: {
        backgroundColor: 'black'
    },
    spellView: {
        borderRadius: 14,
        backgroundColor: '#21211f',
        marginTop: 30,
        flex: .75
    },
    spellLevelHeader: {
        backgroundColor: 'black',
        zIndex: 1,
        borderRadius: 14,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    spellLevelMapItem: {
        backgroundColor: '#21211f',
        zIndex: 1,
        borderRadius: 14,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    spellNameHeaders: {
        color: 'white',
        fontSize: 18
    },
    spellMapItemName: {
        color: 'white',
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    filterBackground: {
        backgroundColor: '#141413',
        width: '100%',
        padding: 15,
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

});
export default styles;