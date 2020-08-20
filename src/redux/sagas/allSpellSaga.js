import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* getSpells() {
    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
    try {
        const responsePayload = yield axios.get(`http://localhost:5000/api/spells`, config);
        yield put({ type: 'SET_ALL_SPELLS' , payload: responsePayload});
    } catch (error) {
        console.log('List get request failed', error);
    }
}

function* allSpellSaga() {
    yield takeEvery('GET_ALL_SPELLS', getSpells);
}

export default allSpellSaga;