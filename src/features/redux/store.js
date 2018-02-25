import { createStore, compose } from 'redux';
import reducer from './reducer';

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'React calculator'
      })
      : compose;

export default function configureStore() {
  const store = createStore(reducer, composeEnhancers());
  return store;
}

