import api from 'api/api';

export const getWeatherByCity = ({ city, countryCode }) => api.get('weather', {
  params: {
    q: `${city},${countryCode}`,
  },
})
  .then(response => response);

export default getWeatherByCity;
