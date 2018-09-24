import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AnyAction, createStore } from 'redux';
import Hello from './containers/Hello';
import './index.css';
import enthusiasm from './reducers/enthusiasm';
import registerServiceWorker from './registerServiceWorker';
import { IStoreState } from './types';

const store = createStore<IStoreState, AnyAction, {}, {}>( enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript'
} );

ReactDOM.render(
  <Provider store={ store } >
    <Hello />
  </Provider>,
  document.getElementById( 'root' ) as HTMLElement
);
registerServiceWorker();
