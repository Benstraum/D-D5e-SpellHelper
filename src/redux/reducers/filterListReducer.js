// make cases for martial & simple weapons, armor and shields. make state an object with arrays inside.
const filterListReducer = (state=[], action) =>{
    switch (action.type) {
        case 'SET_FILTER_LIST':
            state=action.payload
            return state;
        case 'RESET_FILTER_LIST':
            return []
        default:
            return state;
    };
}

export default  filterListReducer;