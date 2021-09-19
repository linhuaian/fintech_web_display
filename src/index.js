import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { tableReducer } from './components/Table';

const engine = new Styletron();

const store = configureStore({
  reducer: tableReducer
});

ReactDOM.render(
  <Provider store={store}>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BaseProvider>
    </StyletronProvider>
  </Provider>,
  document.getElementById('root')
);
