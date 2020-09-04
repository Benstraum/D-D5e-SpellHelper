import { combineReducers } from 'redux';
import allSpellReducer from './allSpellReducer'
import selectedSpellReducer from './SelectedSpellReducer'
import searchReducer from './searchReducer'
import filterQueryReducer from './filterQueryReducer'
// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  allSpellReducer,
  selectedSpellReducer,
  searchReducer,
  filterQueryReducer
});
export default rootReducer;
