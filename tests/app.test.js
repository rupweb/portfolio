import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  expect(screen.getByText('Row 1')).toBeInTheDocument(); // Example text
});
