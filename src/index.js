import React from 'react';
import { render } from 'react-dom';
import './index.css';
import BookCatalog from '../src/views/pages/BookCatalog';
import configureStore from './state/store';
import { Provider as ReduxProvider } from 'react-redux';

const reduxStore = configureStore();

const RootHtml = () => (
  <ReduxProvider store={reduxStore}>
    <BookCatalog />
  </ReduxProvider>
);

render(<RootHtml />, document.getElementById('root'));
