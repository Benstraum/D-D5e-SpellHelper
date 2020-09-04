// make cases for martial & simple weapons, armor and shields. make state an object with arrays inside.
const filterQueryReducer = (state=[], action) =>{
    switch (action.type) {
        case 'SET_QUERIES':
            state=[...state,action.payload]
            return state;
        case 'REMOVE_QUERY':
            let index = state.indexOf(action.payload);
            state.splice(index, 1);
            return state
        default:
            return state;
    };
}

export default  filterQueryReducer;