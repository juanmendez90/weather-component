import React from 'react';
import { render } from 'react-testing-library'
import WeatherScreen from 'containers/WeatherScreen';

describe('WeatherScreen', () => {
  it('renders the WeatherScreen', () => {
    const { queryByText } = render(<WeatherScreen />)
    const header = queryByText('Weather Application')
    expect(header.innerHTML).toBe('Weather Application')
  });
});
