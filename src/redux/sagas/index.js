import { all } from 'redux-saga/effects';

import allSpellSaga from './allSpellSaga' //communicates to server then provides spells in an array to reducer


export default function* rootSaga() {
  yield all([  
    allSpellSaga()
  ]);
}
