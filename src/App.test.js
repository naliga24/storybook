import React from 'react';
import { render } from '@testing-library/react';
import initStoryshots from '@storybook/addon-storyshots';
import App from './App';
initStoryshots();

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
