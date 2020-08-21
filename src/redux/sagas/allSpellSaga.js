import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* getSpells() {
    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: false,
      };
    try {
         const responsePayload = yield fetch('http://localhost:5000/api/spells', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          }).then(response=>response.json())
          .then(data=>data);
  
         
        //  axios.get(`http://localhost:5000/api/spells`, config);
        
        // fetch('http://localhost:5000/api/spells', {
        //     method: 'GET',
        //     headers: { 'Content-Type': 'application/json' },
        //   }).then(response=>response.json())
        //   .then(data=>responsePayload=data);
        
        

          
    console.log(responsePayload)


        yield put({ type: 'SET_ALL_SPELLS' , payload: responsePayload});
    } catch (error) {
        console.log('List get request failed', error);
    }
}

function* allSpellSaga() {
    yield takeEvery('GET_ALL_SPELLS', getSpells);
}

export default allSpellSaga;