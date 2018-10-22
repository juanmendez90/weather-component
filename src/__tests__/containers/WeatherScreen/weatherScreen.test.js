import React from 'react';
import renderWithRedux from 'helpers/renderWithRedux';
import WeatherScreen from 'containers/WeatherScreen';

it('renders without crashing', () => {
  const { getByText } = renderWithRedux(<WeatherScreen />);
  const header = getByText('Weather for cities:');
  expect(header.innerHTML).toBe('Weather for cities:')
});
