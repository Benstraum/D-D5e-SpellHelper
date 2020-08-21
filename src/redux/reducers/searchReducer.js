// make cases for martial & simple weapons, armor and shields. make state an object with arrays inside.
const searchReducer = (state = {spells:[],query:''}, action) => {
    switch (action.type) {
        case 'SET_SEARCH':
            return action.payload;
        case 'RESET_SEARCH':
            return {spells:[],query:''};
        default:
            return state;
    };
}

export default searchReducer;