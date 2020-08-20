import { registerRootComponent } from 'expo';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './src/redux/reducers'; // imports ./redux/reducers/index.js
import rootSaga from './src/redux/sagas'; // imports ./redux/sagas/index.js
//importting fav styling library
import 'semantic-ui-css/semantic.min.css'
import App from './App';

const sagaMiddleware = createSagaMiddleware();

const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware] :
  [sagaMiddleware];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewareList),
);

sagaMiddleware.run(rootSaga);
//set up react native redux with provider around the app
const RNRedux = () => (
  <Provider store = { store }>
    <App />
  </Provider>
)

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately

//calling RNredux allows app to be called with the provider store surrounding it
registerRootComponent(RNRedux);
