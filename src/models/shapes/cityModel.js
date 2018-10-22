import PropTypes from 'prop-types';

export const cityModel = PropTypes.shape({
  name: PropTypes.string.isRequired,
  weather: {
    id: PropTypes.num,
    description: PropTypes.string,
  },
  sys: PropTypes.shape({
    country: PropTypes.string.isRequired,
    sunrise: PropTypes.num,
    sunset: PropTypes.num,
  }),
});

export default cityModel;
