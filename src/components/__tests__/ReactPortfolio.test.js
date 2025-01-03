// src/components/__tests__/ReactPortfolio.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactPortfolio from '../ReactPortfolio';

test('renders portfolio items', () => {
  render(<ReactPortfolio />);
  const projectTitles = screen.getAllByRole('heading', { level: 3 });
  expect(projectTitles).toHaveLength(2); // Replace with actual number of projects
  expect(projectTitles[0]).toHaveTextContent('Project 1');
  expect(projectTitles[1]).toHaveTextContent('Project 2');
});
