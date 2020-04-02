import React from 'react';
import { render } from '@testing-library/react';
import App from '.';

test('renders app component', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
