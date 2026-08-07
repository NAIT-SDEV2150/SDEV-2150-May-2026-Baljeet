import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Details from './Details';

test('displays resource details',() => {

    const resource = {
    title: 'Math Help Centre',
    category: 'Academic Support',
    summary: 'Math support classes for slow learners'
  };

  render(<Details resource ={resource}/>);

  expect(screen.getByText(/academic Support/i)).toBeTruthy();

  });

  test('shows placeholder when no resource is selected', () => {
  render(<Details resource={null} />); // no resource should render a message

  expect(screen.getByText(/select a resource/i)).toBeTruthy();
  });