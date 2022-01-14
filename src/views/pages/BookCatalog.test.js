import { render, screen } from '@testing-library/react';
import BookCatalog from './BookCatalog';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from '../../state/store';

test('renders learn react link', () => {
  const reduxStore = configureStore();

  render(<ReduxProvider store={reduxStore}><BookCatalog /></ReduxProvider>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
