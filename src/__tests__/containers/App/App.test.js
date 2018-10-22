import React from 'react';
import renderWithRedux from 'helpers/renderWithRedux';
import App from 'containers/App';

it('renders without crashing', () => {
  const { getByText } = renderWithRedux(<App />);
  const header = getByText('Weather Application');
  expect(header.innerHTML).toBe('Weather Application')
});
