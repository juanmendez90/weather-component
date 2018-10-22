import PropTypes from 'prop-types';

export const cityModel = PropTypes.shape({
  name: PropTypes.string.isRequired,
  sys: PropTypes.shape({
    country: PropTypes.string.isRequired,
  }),
});

export default cityModel;
