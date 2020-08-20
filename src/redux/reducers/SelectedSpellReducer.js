// make cases for martial & simple weapons, armor and shields. make state an object with arrays inside.
const selectedSpellReducer = (state={}, action) =>{
    switch (action.type) {
        case 'SET_SELECTED_SPELL':
            return action.payload;
        default:
            return state;
    };
}

export default  selectedSpellReducer;