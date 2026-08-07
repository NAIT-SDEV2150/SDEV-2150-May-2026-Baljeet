import { test, expect } from 'vitest'; // test runner
import { screen } from '@testing-library/react';// interactivity
import Header from './Header';
import {renderWithProviders}from '../vitest-helpers'
import { MemoryRouter } from 'react-router'; // import the package
// test('Render the application title', () => {

//     // render
//     render(<Header/>);
 
//     // find 

//     let x = screen.getByText("NAIT Resource Directory"); 

//     // assert
//     expect(x.toBeTruthy());

// });
// render -> find -> assert

test('renders the application title', () => {
  // wrap the Header in the necessary router
  renderWithProviders(
    <MemoryRouter>
      <Header />
    </MemoryRouter>);

  expect(screen.getByText(/nait Resource Directory/i)).toBeTruthy();
});


test('calls handler when button is clicked', async () => {
  let clicked = false;

  renderWithProviders(<button onClick={() => (clicked = true)}>Click</button>);

  await screen.getByText('Click').click(); // HTMLElement.click()

  expect(clicked).toBe(true);
});