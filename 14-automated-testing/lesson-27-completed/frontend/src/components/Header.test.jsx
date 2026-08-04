import { MemoryRouter } from 'react-router'; // import the package
import { test, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../vitest-helpers';
import Header from './Header';

test('renders the application title', () => {
  // wrap the Header in the necessary router
  renderWithProviders(
    <MemoryRouter>
      <Header />
    </MemoryRouter>);

  expect(screen.getByText(/NAIT Resource Directory/i)).toBeTruthy();
});