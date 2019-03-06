import {applyMiddleware, createStore, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import {rootReducer, RootState} from './rootReducer';
import SagaManager from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initalState: RootState = {} as RootState): Store<RootState> {
  const composeEnhancers = composeWithDevTools({});

  const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));

  const store = createStore(rootReducer, initalState, enhancers);

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      console.log('Reload reducers...');
      store.replaceReducer(require('./rootReducer').rootReducer);
    });

    module.hot.accept('./rootSaga', () => {
      console.log('Reloading sagas...');
      SagaManager.cancelSaga(store);
      require('./rootSaga').default.startSaga(sagaMiddleware);
    });
  }

  SagaManager.startSaga(sagaMiddleware);
  return store;
}
