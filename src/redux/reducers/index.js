import { combineReducers } from 'redux';
import allSpellReducer from './allSpellReducer'
import selectedSpellReducer from './SelectedSpellReducer'
// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  allSpellReducer,
  selectedSpellReducer
});
export default rootReducer;
